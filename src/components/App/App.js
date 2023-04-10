import React, { useState, useEffect } from 'react';
import Tricks from '../Tricks/Tricks';
import './App.css';

function App() {
  const [tricks, setTricks] = useState([])
  
  
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
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App;