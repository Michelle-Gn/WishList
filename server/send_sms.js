const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = require('../lib/Config.js')
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12082686529',
     to: '+15625692858'
   })
  .then(message => console.log(message.sid));