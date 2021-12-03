import Server from '../../lib/Server.js';

export default (country) => {
  return Server.post('/country', {country: country});
};