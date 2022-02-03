import Server from '../../lib/Server.js';

export default (id) => {
  return Server.get(`/logs/${id}`);
};