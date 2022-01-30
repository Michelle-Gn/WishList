import React from 'react';

const Navbar = (props) => {
  return (
    <div className="nav">
      <div className="logo">
        <img src="../logo.png"/>
      </div>
      <div className="options">
        <div id="log" onClick={() => {props.changeView('log')}}>
          LOG
        </div>
        <div id="explore" onClick={() => {props.changeView('explore')}}>
          EXPLORE
        </div>
      </div>
    </div>
  )
}

export default Navbar;