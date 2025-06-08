import React, { useState, useEffect } from 'react';
import './Reversi.css';

const BOARD_SIZE = 8;
const EMPTY = 0;
const BLACK = 1;
const WHITE = 2;

const Reversi = () => {
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(BLACK);
  const [validMoves, setValidMoves] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState({ black: 2, white: 2 });

  // Initialize board
  useEffect(() => {
    const initialBoard = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(EMPTY));
    // Set initial pieces
    initialBoard[3][3] = WHITE;
    initialBoard[3][4] = BLACK;
    initialBoard[4][3] = BLACK;
    initialBoard[4][4] = WHITE;
    setBoard(initialBoard);
    updateValidMoves(initialBoard, BLACK);
  }, []);

  // Check if a move is valid
  const isValidMove = (board, row, col, player) => {
    if (board[row][col] !== EMPTY) return false;

    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];

    return directions.some(([dx, dy]) => {
      let x = row + dx;
      let y = col + dy;
      let hasOpponent = false;

      while (x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE) {
        if (board[x][y] === EMPTY) return false;
        if (board[x][y] === player) return hasOpponent;
        hasOpponent = true;
        x += dx;
        y += dy;
      }
      return false;
    });
  };

  // Update valid moves
  const updateValidMoves = (board, player) => {
    const moves = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (isValidMove(board, i, j, player)) {
          moves.push([i, j]);
        }
      }
    }
    setValidMoves(moves);
  };

  // Make a move
  const makeMove = (row, col) => {
    if (!isValidMove(board, row, col, currentPlayer)) return;

    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = currentPlayer;

    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];

    directions.forEach(([dx, dy]) => {
      let x = row + dx;
      let y = col + dy;
      let toFlip = [];

      while (x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE) {
        if (newBoard[x][y] === EMPTY) break;
        if (newBoard[x][y] === currentPlayer) {
          toFlip.forEach(([fx, fy]) => {
            newBoard[fx][fy] = currentPlayer;
          });
          break;
        }
        toFlip.push([x, y]);
        x += dx;
        y += dy;
      }
    });

    setBoard(newBoard);
    const nextPlayer = currentPlayer === BLACK ? WHITE : BLACK;
    setCurrentPlayer(nextPlayer);
    updateValidMoves(newBoard, nextPlayer);

    // Update scores
    const newScores = { black: 0, white: 0 };
    newBoard.forEach(row => {
      row.forEach(cell => {
        if (cell === BLACK) newScores.black++;
        if (cell === WHITE) newScores.white++;
      });
    });
    setScores(newScores);

    // Check if game is over
    const nextValidMoves = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (isValidMove(newBoard, i, j, nextPlayer)) {
          nextValidMoves.push([i, j]);
        }
      }
    }
    if (nextValidMoves.length === 0) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    const initialBoard = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(EMPTY));
    initialBoard[3][3] = WHITE;
    initialBoard[3][4] = BLACK;
    initialBoard[4][3] = BLACK;
    initialBoard[4][4] = WHITE;
    setBoard(initialBoard);
    setCurrentPlayer(BLACK);
    setGameOver(false);
    setScores({ black: 2, white: 2 });
    updateValidMoves(initialBoard, BLACK);
  };

  return (
    <div className="reversi-container">
      <div className="game-info">
        <div className="score">
          <div className="player black">Black: {scores.black}</div>
          <div className="player white">White: {scores.white}</div>
        </div>
        <div className="current-player">
          Current Player: {currentPlayer === BLACK ? 'Black' : 'White'}
        </div>
        {gameOver && (
          <div className="game-over">
            Game Over! {scores.black > scores.white ? 'Black' : 'White'} wins!
            <button onClick={resetGame}>New Game</button>
          </div>
        )}
      </div>
      <div className="board">
        {board.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`cell ${validMoves.some(([x, y]) => x === i && y === j) ? 'valid-move' : ''}`}
                onClick={() => makeMove(i, j)}
              >
                {cell !== EMPTY && (
                  <div className={`piece ${cell === BLACK ? 'black' : 'white'}`} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reversi; 