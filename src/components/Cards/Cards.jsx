import React from 'react'
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';


export default function Cards(props) {
    // const { confirmed, deaths, recovered } =  props.data
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} >  
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5" >DATA</Typography>
                    <Typography color="textSecondary">DATE</Typography>
                    <Typography variant="body2" >Number of active COVID-19 cases</Typography>
                    </CardContent>              
                   
                </Grid>
                <Grid item component={Card} >  
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5" >DATA</Typography>
                    <Typography color="textSecondary">DATE</Typography>
                    <Typography variant="body2" >Number of active COVID-19 cases</Typography>
                    </CardContent>              
                   
                </Grid>
                <Grid item component={Card} >  
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5" >DATA</Typography>
                    <Typography color="textSecondary">DATE</Typography>
                    <Typography variant="body2" >Number of active COVID-19 cases</Typography>
                    </CardContent>              
                   
                </Grid>
            </Grid>
        </div>
    )
}
