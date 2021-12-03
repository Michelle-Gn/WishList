const {Client} = require('pg')

const client = new Client({
  host: 'localhost',
  user: 'michelleguan',
  password: '',
  database: 'countries'
});

client.connect((err) => {
  if (err) {
    throw (err);
  } else {
    console.log('postgreSQL connected...');
  }
});

module.exports = client;