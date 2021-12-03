import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesList from './CountriesList.jsx';
import getCountries from '../../helper/getCountries.jsx';
import addCountry from '../../helper/addCountry.jsx';
import Map from '../components/Map.jsx';

const App = (props) => {

  /* Create countries state */
  const [countries, updateCountries] = useState([]);
  const [input, updateInput] = useState('');

  /* Get countries data */
  useEffect(() => {
    getCountries()
    .then((results) => {
      console.log(results.data.rows);
      updateCountries(results.data.rows);
    })
  }, []);

  /* Create longitude/latitude pins state */
  const [pins, updatePins] = useState([34.0522, -118.2347]);

  var addPin = function (array) {
    updatePins(array);
  }

  /* Update fetch data update state */
  // if (countries.length !== 0){
  return (
    <div>
      <div className="title">
      <h1> Wish List </h1>
      </div>
      <input className="add" placeholder="Add country by code (e.g. USA)" onChange={(e) => {updateInput(e.target.value)}} value={input}/>
      <button className="button" onClick={
        () => addCountry(input)
        .then(() => console.log('country submitted'))
        .catch((err) => console.log(err))}> Add </button>
      <Map pins={pins}/>
      <CountriesList addPin={addPin} countries={countries}/>
    </div>
  )
}

export default App;