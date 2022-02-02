import React, {useState, useEffect} from 'react';
import getLogs from '../../helper/getLogs.jsx';
import Entry from './Entry.jsx';

const Log = (props) => {

  const [logs, updateLogs] = useState([]);
  console.log('logs', logs);

  let getData = () => {
    getLogs().then((results) => {
      updateLogs(results.data)})
  };

  useEffect(getData, [])

  return (
    <div className="log-section">
      <button className="button" onClick={() => props.changeView('create')}>
        Add Log
      </button>
      <div className="entries">
        {logs.map((entry, index) => {
          return (
            <Entry entry={entry} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default Log;