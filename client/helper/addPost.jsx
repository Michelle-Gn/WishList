import Server from '../../lib/Server.js';

export default (journalEntry) => {
  return Server.post('/logs', journalEntry)
}