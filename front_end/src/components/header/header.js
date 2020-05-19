import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header({ buttonText }){
  const path = buttonText === 'Register' ? 'register' : 'login';
  
  return(
    <header className='home-header'>
        <h1 className='home-header__title'>Take Notes</h1>
        <Link to={path}>
          <button className='home-header__button'>{buttonText}</button>
        </Link>
    </header>
  )
}

export default Header;