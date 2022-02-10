import React, { useState, useEffect } from 'react';
import Country from './Country.jsx';

const CountriesList = (props) => {
  return (
    <div className = 'product-container'>
    {props.countries.map((item, index) => {
      return (<Country handleDelete={props.handleDelete} addPin={props.addPin} item={item} key={index}/>)
      })}
    </div>
  )
}

export default CountriesList;