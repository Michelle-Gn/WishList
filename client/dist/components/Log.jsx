import React, {useState, useEffect} from 'react';
import getLogs from '../../helper/getLogs.jsx';
import Entry from './Entry.jsx';
import JournalEntry from './JournalEntry.jsx';

const Log = (props) => {

  const [logs, updateLogs] = useState([]);
  const [postId, updatePost] = useState('');

  let getData = () => {
    getLogs().then((results) => {
      updateLogs(results.data)
    })
  };

  useEffect(getData, []);
  // Create a changeView handler that will be passed down
  let changeView = (post) => {
    updatePost(post);
  }

  return (
    <div className="log-section">
      <button className="button" onClick={() => props.changeView('create')}>
        Add Log
      </button>
      <div className="journal-section">
        <div className="entries">
          {logs.map((entry, index) => {
            return (
              <Entry entry={entry} key={index} changeView={changeView}/>
            )
          })}
        </div>
        {postId.length > 0 &&
          <JournalEntry postId={postId}/>}
      </div>
    </div>
  )
}

export default Log;