import React from 'react';

const Entry = (props) => {
  return (
    <div className="entry" onClick={() => {
      props.changeView(props.entry.id.toString())}}>
      {props.entry.entrytext.substring(0, 16)}
    </div>
  )
}

export default Entry;