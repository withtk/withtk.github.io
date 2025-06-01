import React, { useState, useEffect } from 'react';

const OthelloGame = () => {
  const BOARD_SIZE = 8;
  const EMPTY = 0;
  const BLACK = 1;
  const WHITE = 2;

  // 초기 보드 설정
  const initializeBoard = () => {
    const board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(EMPTY));
    // 초기 4개 돌 배치
    board[3][3] = WHITE;
    board[3][4] = BLACK;
    board[4][3] = BLACK;
    board[4][4] = WHITE;
    return board;
  };

  const [board, setBoard] = useState(initializeBoard);
  const [currentPlayer, setCurrentPlayer] = useState(BLACK);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState({ black: 2, white: 2 });
  const [animatingDiscs, setAnimatingDiscs] = useState(new Set());
  const [placingDisc, setPlacingDisc] = useState(null);

  // 8방향 벡터
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  // 유효한 좌표인지 확인
  const isValidPosition = (row, col) => {
    return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
  };

  // 특정 방향으로 뒤집을 수 있는 돌들 찾기
  const findFlippableDiscs = (board, row, col, player, direction) => {
    const [dRow, dCol] = direction;
    const flippable = [];
    let currentRow = row + dRow;
    let currentCol = col + dCol;

    while (isValidPosition(currentRow, currentCol)) {
      const cell = board[currentRow][currentCol];

      if (cell === EMPTY) {
        return []; // 빈 칸을 만나면 뒤집을 수 없음
      } else if (cell === player) {
        return flippable; // 자신의 돌을 만나면 중간에 있던 상대방 돌들을 뒤집을 수 있음
      } else {
        flippable.push([currentRow, currentCol]); // 상대방 돌 추가
      }

      currentRow += dRow;
      currentCol += dCol;
    }

    return []; // 보드 끝까지 가도 자신의 돌을 못 만나면 뒤집을 수 없음
  };

  // 해당 위치에 돌을 놓을 수 있는지 확인
  const isValidMove = (board, row, col, player) => {
    if (board[row][col] !== EMPTY) return false;

    for (const direction of directions) {
      const flippable = findFlippableDiscs(board, row, col, player, direction);
      if (flippable.length > 0) return true;
    }
    return false;
  };

  // 가능한 모든 수 찾기
  const findValidMoves = (board, player) => {
    const validMoves = [];
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (isValidMove(board, row, col, player)) {
          validMoves.push([row, col]);
        }
      }
    }
    return validMoves;
  };

  // 거리 계산 함수 (중심점에서의 거리)
  const getDistanceFromCenter = (row1, col1, row2, col2) => {
    return Math.sqrt(Math.pow(row2 - row1, 2) + Math.pow(col2 - col1, 2));
  };

  // 돌 놓기
  const makeMove = async (row, col) => {
    if (gameOver || !isValidMove(board, row, col, currentPlayer) || animatingDiscs.size > 0) return;

    // 새 돌 배치 애니메이션
    setPlacingDisc(`${row}-${col}`);

    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = currentPlayer;

    // 뒤집을 돌들 수집
    const allFlippableDiscs = [];
    for (const direction of directions) {
      const flippable = findFlippableDiscs(board, row, col, currentPlayer, direction);
      allFlippableDiscs.push(...flippable);
    }

    // 거리에 따라 정렬 (가까운 것부터)
    allFlippableDiscs.sort((a, b) => {
      const distA = getDistanceFromCenter(row, col, a[0], a[1]);
      const distB = getDistanceFromCenter(row, col, b[0], b[1]);
      return distA - distB;
    });

    // 돌 배치 후 잠시 대기
    setTimeout(() => {
      setPlacingDisc(null);
      setBoard(newBoard);

      // 순차적으로 돌 뒤집기 애니메이션
      allFlippableDiscs.forEach((discPos, index) => {
        setTimeout(() => {
          const discKey = `${discPos[0]}-${discPos[1]}`;
          setAnimatingDiscs(prev => new Set([...prev, discKey]));

          // 애니메이션 완료 후 실제 돌 색상 변경
          setTimeout(() => {
            setBoard(prevBoard => {
              const updatedBoard = prevBoard.map(row => [...row]);
              updatedBoard[discPos[0]][discPos[1]] = currentPlayer;
              return updatedBoard;
            });

            setAnimatingDiscs(prev => {
              const newSet = new Set(prev);
              newSet.delete(discKey);
              return newSet;
            });

            // 마지막 돌 애니메이션이 끝났을 때 다음 플레이어로 전환
            if (index === allFlippableDiscs.length - 1) {
              setTimeout(() => {
                const nextPlayer = currentPlayer === BLACK ? WHITE : BLACK;
                const nextPlayerMoves = findValidMoves(newBoard, nextPlayer);
                const currentPlayerMoves = findValidMoves(newBoard, currentPlayer);

                if (nextPlayerMoves.length > 0) {
                  setCurrentPlayer(nextPlayer);
                } else if (currentPlayerMoves.length > 0) {
                  // 상대방이 둘 수 없으면 현재 플레이어 계속
                } else {
                  // 둘 다 둘 수 없으면 게임 종료
                  setGameOver(true);
                }
              }, 100);
            }
          }, 500); // 뒤집기 애니메이션 지속 시간
        }, index * 120); // 순차적 애니메이션 딜레이
      });
    }, 300); // 돌 배치 후 대기 시간
  };

  // 점수 계산
  useEffect(() => {
    let blackCount = 0;
    let whiteCount = 0;

    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (board[row][col] === BLACK) blackCount++;
        else if (board[row][col] === WHITE) whiteCount++;
      }
    }

    setScores({ black: blackCount, white: whiteCount });
  }, [board]);

  // 게임 재시작
  const resetGame = () => {
    setBoard(initializeBoard());
    setCurrentPlayer(BLACK);
    setGameOver(false);
    setScores({ black: 2, white: 2 });
    setAnimatingDiscs(new Set());
    setPlacingDisc(null);
  };

  // 가능한 수 표시
  const validMoves = findValidMoves(board, currentPlayer);

  const getWinner = () => {
    if (scores.black > scores.white) return 'BLACK';
    if (scores.white > scores.black) return 'WHITE';
    return 'TIE';
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-100 to-green-200 min-h-screen">
      <style jsx>{`
        @keyframes flipDisc {
          0% { transform: perspective(100px) rotateY(0deg) scale(1); }
          50% { transform: perspective(100px) rotateY(90deg) scale(1.1); }
          100% { transform: perspective(100px) rotateY(180deg) scale(1); }
        }
        
        @keyframes placeDisc {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        @keyframes validMoveGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .flip-animation {
          animation: flipDisc 0.5s ease-in-out;
        }
        
        .place-animation {
          animation: placeDisc 0.3s ease-out;
        }
        
        .valid-move-glow {
          animation: validMoveGlow 2s ease-in-out infinite;
        }
        
        .disc-shadow {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2);
        }
        
        .board-cell {
          background: linear-gradient(145deg, #16a34a, #15803d);
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .board-cell:hover {
          background: linear-gradient(145deg, #22c55e, #16a34a);
        }
      `}</style>

      <h1 className="text-4xl font-bold mb-6 text-green-800 drop-shadow-lg">오셀로 (Othello)</h1>

      {/* 점수판 */}
      <div className="flex gap-8 mb-6 text-xl font-semibold">
        <div className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
          currentPlayer === BLACK ? 'bg-gray-800 text-white shadow-lg transform scale-105' : 'bg-white shadow-md'
        }`}>
          <div className="w-8 h-8 bg-black rounded-full disc-shadow"></div>
          <span>흑: {scores.black}</span>
        </div>
        <div className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
          currentPlayer === WHITE ? 'bg-gray-800 text-white shadow-lg transform scale-105' : 'bg-white shadow-md'
        }`}>
          <div className="w-8 h-8 bg-white border-2 border-gray-400 rounded-full disc-shadow"></div>
          <span>백: {scores.white}</span>
        </div>
      </div>

      {/* 게임 상태 */}
      <div className="mb-6 text-lg font-medium">
        {gameOver ? (
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold mb-3 text-green-800">게임 종료!</div>
            <div className="text-xl">
              {getWinner() === 'TIE' ? '🤝 무승부!' :
                getWinner() === 'BLACK' ? '⚫ 흑돌 승리!' : '⚪ 백돌 승리!'}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-3 shadow-lg">
            <div className={`w-6 h-6 rounded-full disc-shadow transition-all duration-300 ${
              currentPlayer === BLACK ? 'bg-black' : 'bg-white border-2 border-gray-400'
            }`}></div>
            <span className="text-green-800">
              {currentPlayer === BLACK ? '흑돌' : '백돌'}의 차례
              {animatingDiscs.size > 0 && ' (애니메이션 진행 중...)'}
            </span>
          </div>
        )}
      </div>

      {/* 게임 보드 */}
      <div className="grid grid-cols-8 gap-2 bg-green-900 p-4 rounded-2xl mb-6 shadow-2xl">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const cellKey = `${rowIndex}-${colIndex}`;
            const isValidMovePosition = validMoves.some(([r, c]) => r === rowIndex && c === colIndex);
            const isAnimating = animatingDiscs.has(cellKey);
            const isPlacing = placingDisc === cellKey;

            return (
              <button
                key={cellKey}
                className={`w-14 h-14 board-cell border border-green-700 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isValidMovePosition && !gameOver && animatingDiscs.size === 0 ? 'ring-2 ring-yellow-400 ring-opacity-70' : ''
                } ${animatingDiscs.size === 0 ? 'hover:scale-105' : ''}`}
                onClick={() => makeMove(rowIndex, colIndex)}
                disabled={gameOver || animatingDiscs.size > 0}
              >
                {cell === BLACK && (
                  <div className={`w-12 h-12 bg-black rounded-full disc-shadow transition-all duration-200 ${
                    isAnimating ? 'flip-animation' : ''
                  } ${isPlacing ? 'place-animation' : ''}`}></div>
                )}
                {cell === WHITE && (
                  <div className={`w-12 h-12 bg-white rounded-full disc-shadow border-2 border-gray-300 transition-all duration-200 ${
                    isAnimating ? 'flip-animation' : ''
                  } ${isPlacing ? 'place-animation' : ''}`}></div>
                )}
                {cell === EMPTY && isValidMovePosition && !gameOver && animatingDiscs.size === 0 && (
                  <div className="w-4 h-4 bg-yellow-400 rounded-full valid-move-glow shadow-lg"></div>
                )}
              </button>
            );
          })
        )}
      </div>

      {/* 게임 정보 */}
      <div className="text-center text-sm text-gray-700 mb-6 max-w-md bg-white bg-opacity-80 rounded-lg p-4 shadow-md">
        <p className="mb-2">⭐ 노란 점이 표시된 위치에 돌을 놓을 수 있습니다.</p>
        <p>🎯 상대방의 돌을 양쪽에서 감싸면 그 돌들이 내 돌로 바뀝니다.</p>
      </div>

      {/* 재시작 버튼 */}
      <button
        onClick={resetGame}
        disabled={animatingDiscs.size > 0}
        className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
          animatingDiscs.size > 0
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
        }`}
      >
        🎮 새 게임
      </button>
    </div>
  );
};

export default OthelloGame;