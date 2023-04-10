import React from "react";
import './Tricks.css';

function Tricks({tricks}) {
  const trickCards = tricks.map((trick) => {
    return (
      <div className="trick-card" id={trick.id} key={trick.id}>
        <p>{trick.stance} {trick.name}</p>
        <p>Obstacle: {trick.obstacle}</p>
        <p>Link to Tutorial:</p>
        <a href={trick.tutorial}>{trick.tutorial}</a>
      </div>
    )
  })

  return (
    <div className="trick-container">
      {trickCards}
    </div>
  )
}

export default Tricks