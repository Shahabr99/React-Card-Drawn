import React from 'react';


const Card = (props) => {

  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    top: Math.floor(Math.random() * 20),
    left: Math.floor(Math.random() * 20),
    transform: `rotate(${Math.floor(Math.random() * 45)}deg)`,
    width: `250px`,
    height: `400px`,
    border: `1px solid black`,
    margin: "100px auto",
    borderRadius: "15px",
    position: "absolute"
  }

  return (
    <div style={cardStyle}></div>
  )
}

export default Card;