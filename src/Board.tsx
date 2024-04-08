import React from 'react'
import Square from './Square'

export default function Board({squares, onClick}: {squares: any, onClick: any}) {
    const renderSquare = (nums: any) => {
        return nums.map((num: number) => <Square value={squares[num]} onClick = {() => onClick(num)} />)
    }
  return (
    <>
        <div className='board-row'>{renderSquare([0,1,2])}</div>
        <div className='board-row'>{renderSquare([3,4,5])}</div>
        <div className='board-row'>{renderSquare([6,7,8])}</div>
    </>
    
  )
}
