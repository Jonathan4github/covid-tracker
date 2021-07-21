import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchCovidTrackRecord } from './api';

import coronaImage from './images/image.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchCovidTrackRecord();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchCovidTrackRecord(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    
    return (
      <div className={styles.container}>
        <img src={coronaImage} alt="covid 19" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
