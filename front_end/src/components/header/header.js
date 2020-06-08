import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header({ buttonText }){
  const path = buttonText === 'Register' ? 'register' : 'login';
  
  return(
    <header className='initital-header'>
        <h1 className='initital-header__title'>Take Notes</h1>
        <Link to={path}>
          <button className='initital-header__button'>{buttonText}</button>
        </Link>
    </header>
  )
}

export default Header;