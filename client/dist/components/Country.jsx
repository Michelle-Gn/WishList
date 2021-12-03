import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Share from './Share.jsx';

const Country = (props) => {
  return (
  <Card className = 'individual-product' style={{ width: '20rem'}}>
    <Card.Img variant="top" src={`https://source.unsplash.com/1600x900/?${props.item.country}`}/>
    <Card.Body>
      <Card.Title>{props.item.country}</Card.Title>
      <Card.Text>
        <div className="capital">Capital: {props.item.capital}</div>
        <div className="subregion">Region: {props.item.subregion} </div>
        <div className="currency">Currency: {props.item.currency}</div>
        <div className="population">Population: {props.item.people}</div>
      </Card.Text>
      <Share info={props.item}/>
      <button onClick={() => props.addPin(props.item.latlng)}>Pin on Map</button>
    </Card.Body>
  </Card>
  )
}

export default Country;


