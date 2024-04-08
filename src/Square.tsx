import React from 'react'

export default function Square({value, handleClick} : {value: any, handleClick: any}) {
    
  return (
    <button className='square' onClick={handleClick}>{value}</button>
  )
}
