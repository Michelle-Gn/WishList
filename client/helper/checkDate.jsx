import Server from '../../lib/Server.js';

export default (date) => {
  return Server.post('/logs/date', {date: date});
}