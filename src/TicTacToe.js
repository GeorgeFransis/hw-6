import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);

  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const isBoardFull = (squares) => {
    return squares.every((square) => square !== null);
  };

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || calculateWinner(newBoard)) {
      return;
    }

    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const winner = calculateWinner(board);
  const isDraw = !winner && isBoardFull(board);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = 'It\'s a draw!';
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (

    <div style={{display:'flex', justifyContent:"center"}}>
    <div>
      <h2>Tic Tac Toe</h2>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button style={{width:"max-content"}} onClick={handleReset}>Reset Game</button>
    </div>
    </div>
  );
};

export default TicTacToe;
