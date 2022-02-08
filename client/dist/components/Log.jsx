import React, {useState, useEffect} from 'react';
import getLogs from '../../helper/getLogs.jsx';
import Entry from './Entry.jsx';
import JournalEntry from './JournalEntry.jsx';

const Log = (props) => {

  const [logs, updateLogs] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [page, updatePage] = useState(0);
  const [prevY, updatePrevY] = useState(0);
  const [postId, updatePost] = useState('');

  const handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    if (prevY > y) {
      const lastId = logs[logs.length - 1].id;
      getLogs(lastId);
      updatePage(lastId);
    }
    updatePrevY(y);
  }

  let getData = () => {
    updateLoading(true);
    getLogs(page).then((results) => {
      updateLogs([...logs, ...results.data]);
      updateLoading(false);
    })

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    let observer = new IntersectionObserver(
      handleObserver, options
    );

    observer.observe(loadingRef);
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