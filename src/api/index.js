import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

axios.get(url)
.then(res => {
    console.log(res.data)
})
.catch(e => {
    console.log("There was an ERROR", e)
})