import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

const fetchCovidData = async (country) => {
    let changeableUrl = url
    
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }
    console.log("country", country)
    console.log("changeableUrl", changeableUrl)
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate} } = await axios.get(changeableUrl);
        return { confirmed, deaths, recovered, lastUpdate } 
        
    } catch (error) {
        console.log("There was an error", error)
    }
}

export const fetchDailyData = async () => {
    try {
        const fetchedDailyDataResults = await axios.get(`${url}/daily`);
        const {data} = fetchedDailyDataResults;
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate  
        }))
        return modifiedData
    }catch(err){
        console.log(`There was an error fetching the daily data: ${err}`)
    }
}

export const fetchCountryData = async () => {
    try {

        const { data: { countries} } = await axios.get(`${url}/countries`);
        return countries.map(country => country.name);
        
    } catch (error) {

        console.log("There was an error while trying to fetch country data", error)
        
    }
}

export default fetchCovidData