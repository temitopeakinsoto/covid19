import React from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components'
import fetchCovidData from './api';

// const res = fetchCovidData();
// console.log("RESULT FROM API: ", res)
class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchCovidData();
    this.setState({ data: fetchedData })
  }
 
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
      <h1>COVID19</h1>
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
    )
 
    };
}

export default App;
