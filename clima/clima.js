const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fbb7a4603bb20d78d4d1516e20f8685d&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}