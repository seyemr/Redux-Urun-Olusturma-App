import React from 'react'

const Input = ({value,placeholder, type, id, name,onChange}) => {
  return (
    <input value={value} className='input' placeholder={placeholder} type={type} id={id} name={name} onChange={onChange} />
  )
}

export default Input