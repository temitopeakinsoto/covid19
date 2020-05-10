import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

const fetchCovidData = async () => {
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate} } = await axios.get(url);
        return { confirmed, deaths, recovered, lastUpdate } 
        
    } catch (error) {
        console.log("There was an error", error)
    }
}

export const fetchDailyData = async () => {
    try {
        const fetchedDailyDataResults = await axios.get(`${url}/daily`);
        console.log("fetchedDailyDataResults", fetchedDailyDataResults)
        const {data} = fetchedDailyDataResults;
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate  
        }))
        return modifiedData
    }catch(err){

    }
}

export default fetchCovidData