import React from 'react'

export default function Square({value, onClick} : {value: any, onClick: any}) {
    
  return (
    <button className='square' onClick={onClick}>{value}</button>
  )
}
