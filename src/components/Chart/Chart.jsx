import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    (async () => {
      setDailyData(await fetchDailyData());
    })()
  }, []);

  const lineChart = (
    dailyData.length && <Line
      data={{
        labels: dailyData.map(({ date }) =>date ),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed ),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true
        }, {
          data: dailyData.map(({ deaths }) => deaths ),
          label: 'deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
        }]
      }}
    />
  );

  return (
    <div className={styles.container}>
      {lineChart}

    </div>
  )
}

export default Chart;
