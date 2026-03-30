import React from 'react';
import { useGame } from '../context/GameContext';
import DominoTile from './DominoTile';
import './GameBoard.css';

const GameBoard = () => {
  const { board, handleBoardTileClick, isTileOpen } = useGame();

  return (
    <div className="game-board">
      {/* Контейнер с позиционированием относительно центра экрана */}
      <div className="board-grid">
        {board.map((tile) => (
          <DominoTile
            key={tile.id}
            tile={tile}
            isOpen={isTileOpen(tile)}
            onClick={handleBoardTileClick}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
