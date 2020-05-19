import React, { useEffect, useState } from 'react';
import './alert.css';

function Alert({ type, message, position = { top: 10, left: 10 }}){
  const stylePosition = {
    top: position.top,
    left: position.left,
  }

  const alertClass = 'home-alert'.concat(type ? ` -${type}` : '');

  return(
    <div className={alertClass} style={stylePosition}>
      <div className='home-alert__message'>
        {message}
      </div>
    </div>
  )
};

export default Alert;