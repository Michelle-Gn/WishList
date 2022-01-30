import React from 'react';

const Log = (props) => {
  return (
    <div className="log-section">
      <button className="button" onClick={() => props.changeView('create')}>
        Add Log
      </button>
      <div className="entries">
        <div className="entry">
          1/30/2022 - Today I ate squid for the first time
        </div>
        <div className="entry">
          1/31/2022 - Today I bungee jumped off of a building
        </div>
      </div>
    </div>
  )
}

export default Log;