const axios = require('axios');

async function getData() {
    const response = await axios.get('https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=b6907d289e10d714a6e88b30761fae22');
    return response.data;
}

module.exports = getData;