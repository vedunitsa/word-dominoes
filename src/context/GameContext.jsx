import React, { createContext, useContext, useState, useEffect } from 'react';
import { doItemsMatch, getMatchScore, getMatchDetails, getRandomWordItemByCategories } from '../data/dictionary';
import levelsData from '../data/levels.json';

export const GameContext = createContext(null);

export const useGame = () => useContext(GameContext);

export const MAX_HAND_SIZE = 9;

const generatePilesBoard = (pileConfig = [5, 5, 5], allowedCategories = []) => {
  const boardTiles = [];
  let idCounter = 1;

  pileConfig.forEach((tilesCount, pileIndex) => {
    // Вычисляем ряд и колонку (до 3 кучек в ряду)
    const colIndex = pileIndex % 3;
    const rowIndex = Math.floor(pileIndex / 3);

    const startX = 40 + colIndex * 125; // Шаг по горизонтали 125px
    const startY = 60 + rowIndex * 160; // Шаг по вертикали 160px (чтобы уместить 2 ряда в 400px)
    
    for (let z = 0; z < tilesCount; z++) {
      boardTiles.push({
        id: `board-pile-${idCounter++}`,
        val1: getRandomWordItemByCategories(allowedCategories),
        val2: getRandomWordItemByCategories(allowedCategories),
        pileIndex,
        x: startX,
        y: startY, 
        z, // z-index/смещение: 0 - самая нижняя (дно)
        removed: false,
        isMatched: false // флаг для анимации совпадения
      });
    }
  });

  return boardTiles;
};

const generateDeck = (count = 30, allowedCategories = []) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `deck-${i}`,
    val1: getRandomWordItemByCategories(allowedCategories),
    val2: getRandomWordItemByCategories(allowedCategories),
  }));
};

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([]); // Очередь (до 9 штук)
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [lastMatchDebug, setLastMatchDebug] = useState(null);

  useEffect(() => {
    startNewGame(0);
  }, []);

  const startNewGame = (levelIndex = currentLevelIndex) => {
    // Если уровень не найден (перешли за конец), начинаем с первого
    const safeIndex = levelIndex < levelsData.length ? levelIndex : 0;
    const levelConfig = levelsData[safeIndex];
    
    setCurrentLevelIndex(safeIndex);

    setBoard(generatePilesBoard(levelConfig.piles, levelConfig.categories)); 
    const newDeck = generateDeck(levelConfig.deckSize, levelConfig.categories);
    
    const initialHandSize = levelConfig.initialHandSize || 5;
    const initialHandTiles = newDeck.slice(0, initialHandSize);
    
    setHand(initialHandTiles);
    setDeck(newDeck.slice(initialHandSize));
    setGameState('playing');
    setLastMatchDebug(null);
  };

  // Проверка открыто ли домино на доске (находится ли оно на самом верху своей кучки)
  const isTileOpen = (tile) => {
    if (tile.removed) return false;
    const overlapping = board.find(
        (t) => !t.removed && t.pileIndex === tile.pileIndex && t.z > tile.z
    );
    return !overlapping;
  };

  const drawFromDeck = () => {
    if (gameState !== 'playing') return;
    if (hand.length >= MAX_HAND_SIZE) {
      // Игрок принудительно тянет при полной руке -> проигрыш (или мы блокируем?)
      // Логика: если рука полна, тянуть нельзя!
      checkLossCondition();
      return;
    }
    if (deck.length === 0) return;

    // Новое домино становится КРАЙНИМ (в начало массива - index 0)
    // Либо в конец очереди, а крайнее всегда 0?
    // User: "новые попадали в начало, заменяет текущую крайнюю"
    // Поэтому кладем в индекс 0!
    const drawn = deck[0];
    setHand([drawn, ...hand]);
    setDeck(deck.slice(1));
    
    // После добора проверяем, не проиграли ли (если рука = MAX и нет ходов)
    setTimeout(checkLossCondition, 100);
  };

  // Проверка совпадения двух доминошек с учетом веса и кликнутой половинки
  const checkTileMatch = (tile1, tile2, clickedBoardHalf = null) => {
    if (!tile1 || !tile2) return null;

    let matches = [];
    const check = (bHalf, hHalf, val1, val2) => {
      const details = getMatchDetails(val1, val2);
      if (details.score > 0) {
        matches.push({ boardHalf: bHalf, handHalf: hHalf, score: details.score, sharedCategories: details.sharedCategories, val1, val2 });
      }
    };

    check('top', 'top', tile1.val1, tile2.val1);
    check('top', 'bottom', tile1.val1, tile2.val2);
    check('bottom', 'top', tile1.val2, tile2.val1);
    check('bottom', 'bottom', tile1.val2, tile2.val2);

    if (matches.length === 0) return null;

    // Если кликнули по конкретной половинке на доске, даем огромный приоритет
    if (clickedBoardHalf) {
      matches.forEach(m => {
        if (m.boardHalf === clickedBoardHalf) m.score += 1000;
      });
    }

    // Сортируем: сначала самые большие очки
    matches.sort((a, b) => b.score - a.score);

    return matches[0];
  };

  // Клик по доске
  const handleBoardTileClick = (tileId, clickedHalf) => {
    if (gameState !== 'playing') return;

    // Блокируем клики, если уже идет анимация (какое-то домино имеет isMatched: true)
    const isAnimating = board.some(t => t.isMatched);
    if (isAnimating) return;

    const clickedTile = board.find((t) => t.id === tileId);
    if (!clickedTile || !isTileOpen(clickedTile)) return; // Нельзя кликать закрытые

    const currentHandTile = hand[0]; // Играем только с первым в очереди
    if (!currentHandTile) return; 

    const matchResult = checkTileMatch(clickedTile, currentHandTile, clickedHalf);

    if (matchResult) {
      // Сохраняем информацию для дебага
      setLastMatchDebug({
         word1: matchResult.val1.word || matchResult.val1.display,
         word2: matchResult.val2.word || matchResult.val2.display,
         categories: matchResult.sharedCategories
      });

      // Совпадение! Сохраняем строку 'top' или 'bottom' чтобы подсветить только половинку
      setBoard(prev => prev.map(t => t.id === tileId ? { ...t, isMatched: matchResult.boardHalf } : t));
      setHand(prev => prev.map((t, idx) => idx === 0 ? { ...t, isMatched: matchResult.handHalf } : t));
      
      // Ждем 1500мс, затем удаляем
      setTimeout(() => {
          setBoard(prev => prev.map(t => t.id === tileId ? { ...t, removed: true, isMatched: false } : t));
          
          // Сдвигаем очередь руки (удаляем первый элемент), очищая флаги анимации
          const newHand = hand.slice(1).map(h => ({...h, isMatched: false}));
          setHand(newHand);
          
          setTimeout(() => {
            checkWinCondition();
            validateEndgamePlayability(newHand);
          }, 50);
      }, 1500);
    } else {
      // Звук ошибки или тряска
    }
  };

  const checkWinCondition = () => {
    // В React state update асинхронный, поэтому лучше проверять после рендера или через useEffect.
    // Но мы можем грубо проверить board. (он может еще не обновиться тут, поэтому вызываем через таймаут)
    setBoard((currBoard) => {
        if (currBoard.every(t => t.removed)) {
            setGameState('won');
        }
        return currBoard;
    });
  };

  const checkLossCondition = () => {
    // Проигрыш, если рука полна (9 слотов)
    // И при этом "крайняя" плитка не совпадает ни с одной из ОТКРЫТЫХ плиток на столе
    setHand((currHand) => {
      setBoard((currBoard) => {
        if (currHand.length >= MAX_HAND_SIZE) {
          const activeTile = currHand[0];
          const openTiles = currBoard.filter(t => !t.removed && isTileOpen(t));
          
          const hasAnyMatch = openTiles.some(t => checkTileMatch(t, activeTile));
          if (!hasAnyMatch && deck.length === 0) { // Если даже колода пуста
              setGameState('lost');
          } else if (!hasAnyMatch) {
              setGameState('lost');
          }
        }
        return currBoard;
      });
      return currHand;
    });
  };

  // Валидация в лейтгейме: если осталось мало (например < 6), проверяем проходимость
  const validateEndgamePlayability = (currentHand) => {
      setBoard(currBoard => {
          const remaining = currBoard.filter(t => !t.removed);
          if (remaining.length === 0 || remaining.length > 5) return currBoard;

          const openTiles = remaining.filter(t => isTileOpen(t));
          const activeTile = currentHand[0];

          if (!activeTile) return currBoard;

          let isPlayable = openTiles.some(t => checkTileMatch(t, activeTile));
          
          // Проверяем, есть ли мэтчи вообще в колоде или руке дальше
          // Для страховки: если сейчас мэтча нет, и мы в лейтгейме (мало плиток), 
          // мы модем подменить половину одного из ЗАКРЫТЫХ домино на ту, что точно матчится с рукой, 
          // так чтобы дать игроку шанс (хотя до него еще надо докопаться).
          // Либо подменить ОТКРЫТУЮ доминошку.
          if (!isPlayable) {
              console.log("Endgame validation: No immediate matches. We could reshuffle or patch a tile here.");
              // В этом прототипе просто логируем "тупик"
              // В полной версии мы выберем рандомный открытый тайл и перезапишем ему val1
              // const randomOpenTile = openTiles[Math.floor(Math.random() * openTiles.length)];
              // randomOpenTile.val1 = activeTile.val1;
          }
          return currBoard;
      });
  };

  return (
    <GameContext.Provider value={{
      board, deck, hand, gameState, currentLevelIndex, lastMatchDebug,
      startNewGame, drawFromDeck, handleBoardTileClick, isTileOpen
    }}>
      {children}
    </GameContext.Provider>
  );
};
