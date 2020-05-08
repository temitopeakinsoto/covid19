import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Card  from './components/Cards/Cards'

function App() {
  
  useEffect(() => {
    axios.get("https://covid19.mathdro.id/api")
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <div className="App">
      <h1> Welcome to our COVID19 MONITOR!</h1>
      <Card />
    </div>
  );
}

export default App;