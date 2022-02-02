import Server from '../../lib/Server.js';

export default () => {
  return Server.get('/logs');
};