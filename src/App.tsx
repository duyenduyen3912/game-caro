import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNext, setIsNext] = useState(false)
  const checkWinner = (squares: any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], 
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for( let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }
    return null
  }

  const handleClick =  (i: number) => {
    if(checkWinner(squares) || squares[i]) return
    squares[i] = isNext ? "X" : "O"
    setSquares(squares)
    setIsNext(!isNext)
  }

  const isWin = checkWinner(squares)
  let status: string
  if(isWin) status ='WINNER ' + isWin
  else {
    status = isNext ? "Next player X" : "Next player O"
  }
  return (
    <div className="game">
      <div className='game-board'>
          <Board squares={squares} onClick={(i: number) => handleClick(i)} />
      </div>
      <div className='game-info'>
          {status}
      </div>
    </div>
  );
}

export default App;
