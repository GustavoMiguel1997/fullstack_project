import React from 'react';
import './card.css';

function Card({ title, description, icon, color }){
  const cardClass = 'card'.concat(color && ` -${color}`)

  return(
    <div className={cardClass}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

Card.defaultProps = {
  color: '#fff'
}

Card.propTypes = {
  title: String,
  description: String,
  icon: String,
  color: String,
}

export default Card;