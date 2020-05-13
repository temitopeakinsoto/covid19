import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import  styles  from './Chart.module.css'
import { fetchDailyData, fetchCountryData } from '../../api';

export default function Chart(props) {
    
    const { data: { confirmed, recovered, deaths}, country } = props;
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchDailyData();
            setDailyData(response)
        }
        fetchData();
    }, [])

    const LineChart = (
        dailyData.length > 0 ? (<Line 
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff', 
                    fill: true
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red', 
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
        />) : null
    )

    console.log("country data", confirmed, recovered, deaths)

    const barChart = (
        confirmed ?
        (<Bar
            data= {{
                labels: ['Infected','Recovered','Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]

            }} 
            options = {{
                legend: {display: false},
                title: {display: true, text: `Current state is ${country}`}
            }}
        />) : null
    )

    return (
        <div className={styles.container}>
           {country ? barChart : LineChart}
        </div>
    )
}
