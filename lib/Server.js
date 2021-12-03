const axios = require('axios');

const SERVER = 'localhost';
const PORT = 3000;
const BASE_URL = `http://${SERVER}:${PORT}`;

const Server = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      'access-control-allow-origin': '*',
      'access-control-allow-headers': '*',
      accept: 'application/json',
      'access-control-allow-methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': 'application/json',
    },
  },
});

module.exports = Server;