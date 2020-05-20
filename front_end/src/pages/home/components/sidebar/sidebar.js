import React from 'react';
import './sidebar.css';

function Sidebar({ children }){
  return(
    <div>
      <nav className='sidebar'>
        {children}
      </nav>
    </div>
  )
}

export default Sidebar;