import React from 'react';
import userIcon from './assets/user.svg';
import './header.css';

function Header() { 
  return (
    <header className="home-header">
      AppName
      <div className="home-header__options">
        <img className="home-header__options__icon" src={userIcon}/>
        <h4 className="home-header__options__user">User name</h4>
      </div>
    </header>
  );
};

export default Header;