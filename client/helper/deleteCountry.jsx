import Server from '../../lib/Server.js';

export default (country) => {
  return Server.delete(`/country/${country}`);
}