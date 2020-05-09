import React from 'react';
import styles from './App.module.css';
import { Card, Chart, CountryPicker } from './components'
import fetchCovidData from './api';

// const res = fetchCovidData();
// console.log("RESULT FROM API: ", res)
class App extends React.Component {

  async componentDidMount() {
    const res = await fetchCovidData();
    console.log("Our response from api is: ", res)
  }
 
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
