import React from 'react';
import './sidebarButton.css';

function SidebarButton({ id, icon, title, onClick }){
  return(
    <button 
      id={id} 
      data-title={title}
      className='sidebar-button' 
      onClick={onClick}
    >
      <img src={icon} className='siderbar-button__icon'/>
    </button>
  )
}

export default SidebarButton;