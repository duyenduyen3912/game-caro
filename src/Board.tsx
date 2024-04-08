import React from 'react'
import Square from './Square'
const SQUARE_QUANTITY = 20;
var horizontal: number[][] = [[]]
for(let i = 0; i < SQUARE_QUANTITY; i++) {
  horizontal[i] = []
  for(let j = 0; j < SQUARE_QUANTITY; j++){
    horizontal[i][j] = i*SQUARE_QUANTITY + j
  }
}
export default function Board({squares, handleClick}: {squares: any, handleClick: any}) {
    const line = (nums: any) => {
        return nums.map((num: number) => <Square value={squares[num]} handleClick = {() => handleClick(num)} />)
    }
  return (
    <>
    {
      horizontal.map((item) => {
        return (
          <div className='line'>{line(item)}</div>
        )
      })
    }
    </>
    
  )
}
