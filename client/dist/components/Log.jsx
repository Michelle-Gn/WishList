import React, {useState, useEffect, useRef} from 'react';
import getLogs from '../../helper/getLogs.jsx';
import Entry from './Entry.jsx';
import JournalEntry from './JournalEntry.jsx';

const Log = (props) => {

  const [logs, updateLogs] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [page, updatePage] = useState(0);
  // const [prevY, updatePrevY] = useState(0);
  const [postId, updatePost] = useState('');
  // const loadingRef = useRef(null);

  // const handleObserver = (entities, observer) => {
  //   let y = entities[0].boundingClientRect.y;
  //   if (prevY > y) {
  //     let lastId = logs[logs.length - 1].id;
  //     updateLoading(true);
  //     getLogs(lastId).then((results) => {
  //       updateLogs([...logs, ...results.data]);
  //       updateLoading(false);
  //     });
  //     updatePage(lastId);
  //   }
  //   updatePrevY(y);
  //   console.log('prevY', prevY, 'y', y);
  // }

  const pageUpdate = () => {
    updatePage(logs[logs.length -1].id);
  }

  let getData = () => {
    // updateLoading(true);
    getLogs(page).then((results) => {
      updateLogs([...logs, ...results.data]);
      // updateLoading(false);
    })

    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 1.0
    // };

    // let observer = new IntersectionObserver(
    //   handleObserver, options
    // );

    // observer.observe(loadingRef.current);
  };

  useEffect(getData, [page]);

  // Create a changeView handler that will be passed down
  let changeView = (post) => {
    updatePost(post);
  }

  // const loadingCSS = {
  //   height: "100px",
  //   margin: "30px"
  // }

  // const loadingTextCSS = {display: loading ? "block" : "none" };

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
        <button className="button" onClick={() => {pageUpdate()}}>See older</button>
      </div>
    </div>
  )
}

export default Log;