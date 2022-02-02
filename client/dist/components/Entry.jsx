import React from 'react';

const Entry = (props) => {
  return (
    <div className="entry">
      {props.entry.entrytext}
    </div>
  )
}

export default Entry;