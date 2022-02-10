import Server from '../../lib/Server.js';

export default (entryDate) => {
  return Server.get(`/logs/${entryDate}`);
};