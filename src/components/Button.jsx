import React from 'react'

const Button = ({onClick, btnText}) => {
  return (
    <button className='btn btn-success' onClick={onClick}>
        {btnText}        
    </button>
  )
}

export default Button
