import React from 'react';
import { useGame, MAX_HAND_SIZE } from '../context/GameContext';
import DominoTile from './DominoTile';
import './Hand.css';

const Hand = () => {
  const { hand, deck, drawFromDeck } = useGame();

  // Создаем массив-болванку для пустых слотов
  const emptySlots = Math.max(0, MAX_HAND_SIZE - hand.length);

  return (
    <div className="hand-container">
      {/* Кнопка "Взять из колоды" */}
      <div 
        className={`deck-stack ${deck.length === 0 ? 'empty' : ''}`}
        onClick={drawFromDeck}
      >
        {deck.length > 0 ? (
          <div className="deck-card">
            <span>+{deck.length}</span>
            <span>Колода</span>
          </div>
        ) : (
          <div className="deck-card empty-card">Пусто</div>
        )}
      </div>

      <div className="hand-queue">
        {/* Рендерим текущие костяшки в руке */}
        {hand.map((tile, index) => (
          <div key={tile.id} className={`queue-slot ${index === 0 ? 'active-slot' : ''}`}>
             <DominoTile tile={tile} isOpen={true} isHandTile={true} />
             {index === 0 && <div className="active-indicator">Акт</div>}
          </div>
        ))}
        {/* Заполняем оставшиеся пустые слоты */}
        {[...Array(emptySlots)].map((_, i) => (
          <div key={`empty-${i}`} className="queue-slot empty"></div>
        ))}
      </div>
    </div>
  );
};

export default Hand;
