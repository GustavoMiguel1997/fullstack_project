import React from 'react';
import './input.css';

function Input({ id, onChange, text, type, autoFocus }){
  function handleFocus(e){
    const element = e.target.previousElementSibling
    element.classList.add('-isFilled')
  }

  function handleBlur(e){
    if(!e.target.value){
      const element = e.target.previousElementSibling
      element.classList.remove('-isFilled')
    }
  }

  return(
    <div className='input-box'>
      <span className='input-span'>{text}</span>
      <input 
        id={id} 
        type={type} 
        className='input' 
        onChange={onChange} 
        autoFocus={autoFocus}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default Input;