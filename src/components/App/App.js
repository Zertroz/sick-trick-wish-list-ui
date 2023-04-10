import React, { useState, useEffect } from 'react';
import Tricks from '../Tricks/Tricks';
import './App.css';
import Form from '../Form/Form';

function App() {
  const [tricks, setTricks] = useState([])
  
  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick])
    console.log(tricks)
  }
  const callTricks = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/tricks')
      const tricks = await response.json()
      setTricks(tricks)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    callTricks()
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App;