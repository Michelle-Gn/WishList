import Server from '../../lib/Server.js';

export default (page) => {
  return Server.get(`/entries/${page}`);
};