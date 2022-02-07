import React, {useState, useEffect} from 'react';
import getLog from '../../helper/getLog.jsx';
import EntryCard from '../components/EntryCard.jsx';

const JournalEntry = (props) => {

  const moodBorder = '3px solid rgba(19, 94, 74, 0.8)';
  const callFill = '#F6BB42';
  const rankingFill = '#F6BB42';

  const [journal, updateJournal] = useState([]);

  let getData = () => {
    getLog(props.postId).then((results) => {
      updateJournal(results.data);
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
        <EntryCard journal={journal}/>
      </div>
    )
  }
}

export default JournalEntry;

