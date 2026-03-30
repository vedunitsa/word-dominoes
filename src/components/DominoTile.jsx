import React from 'react';
import './DominoTile.css';

const DominoTile = ({ tile, isOpen, onClick, isHandTile, isDeckTile }) => {
  if (tile.removed) {
    return <div className="domino-tile-placeholder" style={{ left: tile.x, top: tile.y, zIndex: tile.z }}></div>;
  }

  const handleClick = (e) => {
    if (isOpen && onClick) {
      let clickedHalf = null;
      if (e.target.closest('.top-half')) clickedHalf = 'top';
      else if (e.target.closest('.bottom-half')) clickedHalf = 'bottom';
      onClick(tile.id, clickedHalf);
    }
  };

  const getEmojiClass = (val) => val.isEmoji ? 'is-emoji' : '';

  // Базовые стили для позиционирования на доске
  const boardStyle = (!isHandTile && !isDeckTile) ? {
    left: `${tile.x}px`,
    top: `${tile.y - tile.z * 5}px`, // Смещение вверх для эффекта стопки
    zIndex: tile.z + 10,
    position: 'absolute'
  } : {};

  return (
    <div 
      className={`domino-tile ${isOpen ? 'open' : 'closed'} ${isHandTile ? 'hand-tile' : ''} ${isDeckTile ? 'deck-tile' : ''} ${tile.isMatched ? 'matched-tile' : ''}`}
      style={boardStyle}
      onClick={handleClick}
    >
      {isOpen || isHandTile ? (
        <>
          <div className={`half top-half ${getEmojiClass(tile.val1)} ${tile.isMatched === 'top' ? 'matched-glow' : ''}`}>
            {tile.val1.display}
          </div>
          <div className="divider"></div>
          <div className={`half bottom-half ${getEmojiClass(tile.val2)} ${tile.isMatched === 'bottom' ? 'matched-glow' : ''}`}>
            {tile.val2.display}
          </div>
          {tile.isMatched && !isHandTile && (
            <div className="floating-score">+10</div>
          )}
        </>
      ) : (
        <div className="domino-back">
          <div className="back-pattern"></div>
        </div>
      )}
    </div>
  );
};

export default DominoTile;
