const db = require('../../db/index.js');
const getDataByCountry = require('../utils/getData.js');
const sendMessage = require('../utils/sendMessage.js');

module.exports  = {
  getLogs: function (req, res) {
    let sql = 'select * from schema2.logs order by entrydate desc';
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(result);
        res.status(200).send(result.rows);
      }
    })
  },

  getLog: function (req, res) {
    let postId = req.params.id;
    let sql = `select * from schema2.logs where id = ${postId}`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result.rows);
      }
    })
  },

  addLog: function (req, res) {
    let entrydate = req.body.entrydate;
    let entrytext = req.body.entrytext;
    let entrycall = req.body.entrycall;
    let mood = req.body.mood;
    let ranking = req.body.ranking;
    let sql = `insert into schema2.logs (entrydate, entrytext, entrycall, mood, ranking) values ('${entrydate}', '${entrytext}', '${entrycall}', '${mood}', '${ranking}')`;

    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(results);
        res.status(201).send('success!');
      }
    })
  },

  addCountry: function (req, res) {
    var country = req.body.country;
    console.log('country', country);
    getDataByCountry(country)
    .then((results) => {
      var country = results.data.name;
      var capital = results.data.capital;
      var subregion = results.data.subregion;
      var currency = results.data.currencies[0].name;
      var people = results.data.population.toLocaleString("en-US");
      var latlng = results.data.latlng;

      console.log('population', people);
      var sql = `insert into schema2.countries (country, capital, subregion, currency, people, latlng) values ('${country}', '${capital}', '${subregion}', '${currency}', '${people}', ARRAY[${latlng[0]}, ${latlng[1]}])`
      console.log(sql);

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

