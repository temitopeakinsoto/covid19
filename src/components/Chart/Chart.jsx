import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import  styles  from './Chart.module.css'
import { fetchDailyData, fetchCountryData } from '../../api';

export default function Chart() {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchDailyData();
            setDailyData(response)
        }
        fetchData();
    })

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

    return (
        <div className={styles.container}>
           {LineChart}
        </div>
    )
}
