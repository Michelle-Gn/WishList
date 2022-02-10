import React, {useState, useEffect, useRef} from 'react';
import getLogs from '../../helper/getLogs.jsx';
import Entry from './Entry.jsx';
import JournalEntry from './JournalEntry.jsx';

const Log = (props) => {

  const [logs, updateLogs] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [page, updatePage] = useState(0);
  const [postId, updatePost] = useState('');

  const pageUpdate = () => {
    updatePage(logs[logs.length -1].entrydate);
  }

  let getData = () => {
    getLogs(page).then((results) => {
      updateLogs([...logs, ...results.data]);
    })
  };

  useEffect(getData, [page]);

  let changeView = (postDate) => {
    updatePost(postDate);
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
      <button className="button" onClick={() => {pageUpdate()}}>
        See older
      </button>
    </div>
  )
}

export default Log;