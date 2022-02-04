import React, {useState, useEffect} from 'react';
import getLog from '../../helper/getLog.jsx';

const JournalEntry = (props) => {

  const [journal, updateJournal] = useState([]);

  let getData = () => {
    getLog(props.postId).then((results) => {
      updateJournal(results.data)
    })
  };

  useEffect(getData, [props.postId]);

  if (journal.length === 0) {
    return (
      <div className="journal">
        Loading...
      </div>
    )
  } else {
    return (
      <div className="journal">
        {journal[0].entrytext}
      </div>
    )
  }

}

export default JournalEntry;

