import React from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components'
import fetchCovidData from './api';
import Axios from 'axios';

import covid from './components/images/covid.jpg'

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchCovidData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchCovidData(country);
    this.setState({ country: country, data: fetchedData })
  } 
 
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
      <img className={styles.image} src={covid} alt="Covid-19 Img"/>
      <Cards data={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
    )
 
    };
}

export default App;
