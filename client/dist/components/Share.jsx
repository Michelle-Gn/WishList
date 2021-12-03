import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import sendMessage from '../../helper/sendMessage.jsx';

var Share = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [phoneNumber, setNumber] = useState('');

    return (
      <>
        <button className="createTripButton" onClick={handleShow}>
          Text to Friend
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Send Below Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{`${props.info.country} is a country in ${props.info.subregion} with a population of ${props.info.people}. Its capital is ${props.info.capital} and its currency is the ${props.info.currency}. Hope we can take a trip there someday!`}</div>
            <Form>
              <Form.Group>
                <Form.Control
                onChange={
                  (e) => {setNumber(e.target.value)}
                }
                value={phoneNumber}
                placeholder='Enter phone number (e.g. +15625692858)'/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={(e) => {
              e.preventDefault()
              sendMessage(props.info.country, props.info.capital, props.info.subregion, props.info.currency, props.info.people, phoneNumber)
              .then((result) => console.log('message sent!'))
              .catch((error) => console.log(error))
            }}>Send!</button>
          </Modal.Footer>
        </Modal>
      </>
    );

}

export default Share;