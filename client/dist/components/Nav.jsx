import React from 'react';

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">
        <img src="../logo.png"/>
      </div>
      <div className="selection" onClick={() => {props.changeView('log')}}>
        LOG
      </div>
      <div className="selection" onClick={() => {props.changeView('explore')}}>
        EXPLORE
      </div>
    </div>
  )
}

export default Navbar;