const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = require('../../lib/Config.js')

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twilio_phone_number = '+12082686529';

var sendMessage = (country, subregion, population, capital, currency, phoneNumber) => {
  return client.messages
    .create({
       body: `${country} is a country in ${subregion} with a population of ${population}. Its capital is ${capital} and its currency is the ${currency}. Hope we can take a trip there someday!`,
       from: twilio_phone_number,
       to: phoneNumber
     })
}

module.exports = sendMessage;