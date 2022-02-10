import React from 'react';
import moment from 'moment';

const Entry = (props) => {
  return (
    <div className="entry" onClick={() => {
      props.changeView(props.entry.entrydate)}}>
      <div className="entry-date">{moment(props.entry.entrydate).format('MMMM Do YYYY') + ':'}</div>
      <div className="entry-text">{props.entry.entrytext.substring(0, 16) + '...'}</div>
    </div>
  )
}

export default Entry;