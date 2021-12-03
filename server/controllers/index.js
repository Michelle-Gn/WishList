const db = require('../../db/index.js');
const getDataByCountry = require('../utils/getData.js');
const sendMessage = require('../utils/sendMessage.js');

module.exports  = {
  addCountry: function (req, res) {
    var country = req.body.country;

    getDataByCountry(country)
    .then((results) => {
      var country = results.data.name;
      var capital = results.data.capital;
      var subregion = results.data.subregion;
      var currency = results.data.currencies[0].name;
      var people = results.data.population;
      var latlng = results.data.latlng;

      console.log('latlng', latlng);
      var sql = `insert into schema2.countries (country, capital, subregion, currency, people, latlng) values ('${country}', '${capital}', '${subregion}', '${currency}', '${people}', ARRAY[${latlng[0]}, ${latlng[1]}])`

      console.log('sql', sql);

      db.query(sql, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send('Country information added!')
        }
      })
    })
  },

  getCountries: function (req, res) {
    var sql = 'select * from schema2.countries'
      db.query(sql, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result)
        }
      })
  },

  shareCountry: function (req, res) {
    var country = req.body.name;
    var capital = req.body.capital;
    var subregion = req.body.subregion;
    var currency = req.body.currency;
    var population = req.body.population;
    var phoneNumber = req.body.phoneNumber;
    sendMessage(country, subregion, population, capital, currency, phoneNumber).then(
      (message) => {
        console.log(message);
        res.status(201).send('message sent!');
      })
  }
}

