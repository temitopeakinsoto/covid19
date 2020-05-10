import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

const fetchCovidData = async () => {
    try {
        const { data: { confirmed, deaths, recovered} } = await axios.get(url);
        return { confirmed, deaths, recovered } 
        
    } catch (error) {
        console.log("There was an error", error)
    }
}

export const fetchDailyData = async () => {
    try {
        const dailyData = await axios.get(`${url}/`)
    }catch(err){

    }
}

export default fetchCovidData