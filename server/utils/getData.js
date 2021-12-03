const axios = require('axios');

var getDataByCountry = (country) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
return axios.get(`https://restcountries.com/v2/alpha/${country}`);

}

module.exports = getDataByCountry;


