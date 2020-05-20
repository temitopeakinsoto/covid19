import React from 'react'
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import Countup from 'react-countup'
import cx from 'classnames';


export default function Cards(props) {
    const { confirmed, deaths, recovered, lastUpdate } = props.data;
    if(!confirmed){
        return(<h1>Fetching Covid-19 Data...</h1>)
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={9}  md={3} className={cx(styles.card, styles.infected)}>  
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5" >
                        <Countup start={0} end={confirmed.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of active COVID-19 cases</Typography>
                    </CardContent>              
                   
                </Grid>
                <Grid item component={Card} xs={9}  md={3} className={cx(styles.card, styles.recovered)}>  
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5" >
                        <Countup start={0} end={recovered.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of recoveries from COVID-19 </Typography>
                    </CardContent>              
                   
                </Grid>
                <Grid item component={Card} xs={9}  md={3} className={cx(styles.card, styles.deaths)}>  
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5" >  
                        <Countup start={0} end={deaths.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of deaths from COVID-19 cases</Typography>
                    </CardContent>              
                   
                </Grid>
            </Grid>
        </div>
    )
}
