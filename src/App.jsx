import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import GameBoard from './components/GameBoard';
import Hand from './components/Hand';

const GameContainer = () => {
  const { gameState, startNewGame, currentLevelIndex, lastMatchDebug, score } = useGame();

  return (
    <>
      <header className="game-header">
        <h1 className="game-title">Word Dominoes</h1>
        <div className="status-badge">
          Уровень {currentLevelIndex + 1} | Очки: {score}
        </div>
      </header>

      <GameBoard />
      <Hand />

      {lastMatchDebug && (
        <div style={{ textAlign: 'center', marginTop: '15px', color: '#fff', fontSize: '15px', background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '8px', maxWidth: '600px', margin: '20px auto 0' }}>
            <strong>Дебаг:</strong> {lastMatchDebug.word1} ↔ {lastMatchDebug.word2} (категории: <em>{lastMatchDebug.categories.join(', ')}</em>)
        </div>
      )}

      {/* Оверлей победы/поражения */}
      {gameState === 'won' && (
        <div className="info-overlay">
          <h2>Уровень Пройден!</h2>
          <button onClick={() => startNewGame(currentLevelIndex + 1)}>Следующий Уровень</button>
        </div>
      )}
      {gameState === 'lost' && (
        <div className="info-overlay">
          <h2>Нет Ходов!</h2>
          <p style={{marginBottom: "20px"}}>Не отчаивайтесь, попробуйте еще раз.</p>
          <button onClick={() => startNewGame(currentLevelIndex)} style={{background: '#ff0033', boxShadow: '0 4px 0 #cc0000'}}>Начать Заново</button>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}

export default App;
