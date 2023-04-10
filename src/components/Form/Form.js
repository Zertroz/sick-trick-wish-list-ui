import React, { useState } from "react";
import './Form.css';

function Form({addTrick}) {
  const [trickName, setTrickName] = useState('')
  const [stance, setStance] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [link, setLink] = useState('')

  const submitTrick = (event) => {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      stance: stance,
      trick: trickName,
      obstacle: obstacle,
      tutorial: link
    }
    console.log(newTrick)
    addTrick(newTrick);
    setTrickName('')
    setStance('')
    setObstacle('')
    setLink('')
  }

  return (
    <form>
      <select name="stance" onChange={event => setStance(event.target.value)}>
        <option value="">Choose your Stance</option>
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
      </select>
      <input 
        type="text"
        title="trick"
        placeholder="Name of Trick"
        value={trickName}
        onChange={event => setTrickName(event.target.value)}
      />
      <select name="obstacle" onChange={event => setObstacle(event.target.value)}>
        <option value="">Choose your Obstacle</option>
        <option value="flatground">Flatground</option>
        <option value="ledge">Ledge</option>
        <option value="rail">Rail</option>
        <option value="stairs">Stairs</option>
        <option value="pool">Pool</option>
      </select>
      <input 
        type="text"
        title="link"
        placeholder="Link to tutorial"
        value={link}
        onChange={event => setLink(event.target.value)}
      />
      <button onClick={submitTrick}>Send it!</button>
    </form>
  )
}

export default Form;