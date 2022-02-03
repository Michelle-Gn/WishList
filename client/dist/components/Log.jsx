import React, {useState, useEffect} from 'react';
import getLogs from '../../helper/getLogs.jsx';
import getLog from '../../helper/getLog.jsx';
import Entry from './Entry.jsx';

const Log = (props) => {

  const [logs, updateLogs] = useState([]);
  const [postId, updatePost] = useState('');
  const [postData, updatePostData] = useState([]);
  console.log('logs', logs);

  let getData = () => {
    getLogs().then((results) => {
      console.log('getData fired')
      updateLogs(results.data)})
    // if post is not empty, send a get request with the post id
    getLog(post).then((results) => {
      updatePost(results.data)})
  };

  useEffect(getData, []);
  // Create a changeView handler that will be passed down
  let changeView = (post) => {
    // The changeView handler will update the post state with the postId selected in Entry component
    updatePost(post);
  }

  return (
    <div className="log-section">
      <button className="button" onClick={() => props.changeView('create')}>
        Add Log
      </button>
      <div className="entries">
        {logs.map((entry, index) => {
          return (
            <Entry entry={entry} key={index} changeView={changeView}/>
          )
        })}
      </div>
      <div className="entry">

      </div>
    </div>
  )
}

export default Log;