import React, { useRef, useEffect } from 'react';
import './sidebarButton.css';

function SidebarButton({ id, icon, title, onClick, barColor, isSelected }){
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.style.setProperty('border-left-color', barColor);
  }, [])

  return(
    <button
      ref={buttonRef} 
      id={id} 
      data-title={title}
      className={'sidebar-button'.concat(isSelected ? ' -selected' : '')} 
      onClick={onClick}
    >
      <img src={icon} className='siderbar-button__icon'/>
    </button>
  )
}

export default SidebarButton;