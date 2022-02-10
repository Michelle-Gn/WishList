import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountriesList from './CountriesList.jsx';
import getCountries from '../../helper/getCountries.jsx';
import addCountry from '../../helper/addCountry.jsx';
import deleteCountry from '../../helper/deleteCountry.jsx';
import Map from '../components/Map.jsx';


const Explore = () => {
  // make a list of automatically updating activities
  /* Create countries state */
  const [countries, updateCountries] = useState([]);
  const [input, updateInput] = useState('');

  let getData = () => {
    getCountries().then((results) => {
      updateCountries(results.data.rows) })
  };

  /* Get countries data */
  useEffect(getData, []);

  /* Create longitude/latitude pins state */
  const [pins, updatePins] = useState([34.0522, -118.2347]);

  var addPin = function (array) {
    updatePins(array);
  }

  let handleClick = function (input) {
    addCountry(input).then(() => {
      console.log("country submitted!");
      getData();
    }).catch((err) => console.log(err))
  }

  let handleDelete = function (country) {
    deleteCountry(country).then(() => {
      getData();
    }).catch((err) => console.log(err))
  }

  /* Update fetch data update state */
  // if (countries.length !== 0){
  return (
    <div>
      <div className="add">
      <input placeholder="Add country by code (e.g. USA)" onChange={(e) => {updateInput(e.target.value)}} value={input}/>
      <button className="button" onClick={() => {handleClick(input)}}> Add </button>
      </div>
      <div className="map">
      <Map pins={pins}/>
      </div>
      <CountriesList handleDelete={handleDelete} addPin={addPin} countries={countries}/>
    </div>
  )
}

export default Explore;