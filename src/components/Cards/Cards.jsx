import React from 'react';
import CountUp from 'react-countup';
import className from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props) => {
  const {data: {confirmed, recovered, deaths, lastUpdate} } = props;
  const cardData = [
    {
      style: 'infected',
      title: 'Infected',
      value: confirmed && confirmed.value,
      lastUpdate,
      text: 'Number of active cases of COVID 19'
    },
    {
      style: 'recovered',
      title: 'Recovered',
      value: recovered && recovered.value,
      lastUpdate,
      text: 'Number of recoveries from COVID 19'
    },
    {
      style: 'deaths',
      title: 'Deaths',
      value: deaths && deaths.value,
      lastUpdate,
      text: 'Number of deaths caused by COVID 19'
    }
  ]

  if (!confirmed) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {
          cardData.map(({style, title, value, lastUpdate, text }) => (
            <Grid item component={Card} xs={12} md={3} className={className(styles.card, styles[style])}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>{title}</Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={value} duration={2.5} seperator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{text}</Typography>
              </CardContent>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default Cards;
