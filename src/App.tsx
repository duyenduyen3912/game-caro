import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
const SQUARE_QUANTITY = 20;
function App() {
  const [squares, setSquares] = useState(Array(100).fill(null))
  const [isNext, setIsNext] = useState(false)
  const lines = () => {
  var horizontal: number[][] = [[]]
  for(let i = 0; i < SQUARE_QUANTITY; i++) {
    horizontal[i] = []
    for(let j = 0; j < SQUARE_QUANTITY; j++){
      horizontal[i][j] = i*SQUARE_QUANTITY + j
    }
  }
  var vertical: number[][] = [[]]
  for(let i = 0; i < SQUARE_QUANTITY; i++){
    if(i !== SQUARE_QUANTITY - 1)vertical.push([])
    for(let j = 0; j < SQUARE_QUANTITY; j ++){
      vertical[i].push(horizontal[j][i])
    }
  }

  var diagonal: number[][] = [[],[]]
  let j = SQUARE_QUANTITY - 1
  for(let i = 0; i < SQUARE_QUANTITY; i++){
    diagonal[0].push(horizontal[i][i])
    diagonal[1].push(horizontal[i][j])
    j--
  }
    return [...horizontal,...vertical, ...diagonal]
  }
  const check = (squares: any) => {
    for( let i = 0; i < lines().length; i++){
      const [a, b, c, d] = lines()[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) return squares[a]
    }
    return null
  }

  const handleClick =  (i: number) => {
    if(check(squares) || squares[i]) return
    squares[i] = isNext ? "X" : "O"
    setSquares(squares)
    setIsNext(!isNext)
  }

  const isWin = check(squares)
  let status: string
  if(isWin) status ='Thắng cuộc ' + isWin
  else {
    status = isNext ? "Lượt tiếp theo X" : "Lượt tiếp theo O"
  }
  console.log(squares)
  return (
    <div className="game">
      <div className='game-board'>
          <Board squares={squares} handleClick={(num: number) => handleClick(num)} />
      </div>
      <div className='game-info'>
          {status}
      </div>
    </div>
  );
}

export default App;
