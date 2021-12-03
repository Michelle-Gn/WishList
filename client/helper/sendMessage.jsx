import Server from '../../lib/Server.js';

export default (name, capital, subregion, currency, population, phoneNumber) => {
  return Server.post('/message', {
    name: name,
    capital: capital,
    subregion: subregion,
    currency: currency,
    population: population,
    phoneNumber: phoneNumber
  });
};

