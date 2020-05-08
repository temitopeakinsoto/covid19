import React, { useEffect } from 'react';
import styles from './App.module.css';
import axios from 'axios';
import { Card, Chart, CountryPicker } from './components'

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
    <div className={styles.container}>
      <h1>COVID19</h1>
      <Card />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
