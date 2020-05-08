import React from 'react';
import styles from './App.module.css';
import { Card, Chart, CountryPicker } from './components'

class App extends React.Component {

  render() {
    return (
      <div className={styles.container}>
      <h1>COVID19</h1>
      <Card />
      <Chart />
      <CountryPicker />
    </div>
    )
 
    };
}

export default App;
