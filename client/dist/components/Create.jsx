import React, {useState, useEffect} from 'react';
import addJournal from '../../helper/addPost.jsx';
import checkDate from '../../helper/checkDate.jsx';

const Create = (props) => {

  const [valid, updateValid] = useState('');
  const [journal, updateJournal] = useState('');
  const [mood, updateMood] = useState({happy: '', chill: '', tired: ''});
  const [call, updateCall] = useState({yes: '', no: ''});
  const [ranking, updateRanking] = useState({once: '', twice: '', thrice: ''});

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const populateValid = () => {
    checkDate(today).then((results) => {
      updateValid(results.data);
    })
  }

  useEffect(populateValid, []);

  const moodBorder = '3px solid rgba(19, 94, 74, 0.8)';
  const callFill = '#F6BB42';
  const rankingFill = '#F6BB42';

  let select = (id, state, updateState, formatString) => {
    if (state[id] === '') {
      let newState = {};
      for (let key in state) {
        if (key === id) {
          newState[key] = formatString;
        } else {
          newState[key] = '';
        }
      }
      updateState({...state, ...newState});
    } else {
      updateState({...state, [id]: ''});
    }
  };

  let writeJournal = (e) => {
    e.preventDefault();
    updateJournal(e.target.value);
  }

  const styles = {
    textAreaStyle: {
      width: '800px',
      height: '50px',
      border: '3px solid rgba(19, 94, 74, 0.8)'
    },
    happy: {
      border: mood.happy
    },
    chill: {
      border: mood.chill
    },
    tired: {
      border: mood.tired
    },
    yes: {
      backgroundColor: call.yes
    },
    no: {
      backgroundColor: call.no
    },
    once: {
      backgroundColor: ranking.once
    },
    twice: {
      backgroundColor: ranking.twice
    },
    thrice: {
      backgroundColor: ranking.thrice
    }
  }

  const CHAR_LIMIT = 150;

  const submitJournal = () => {
    let isValid = true;
    // if any pieces of state are completely blank
    if (journal.length === 0 || journal.length > CHAR_LIMIT) {
      isValid = false;
    }

    if (!valid) {
      isValid = false;
    }

    const isBlank = (element) => {return element === ''};

    if (Object.values(mood).every(isBlank)) {
      isValid = false;
    };
    if (Object.values(call).every(isBlank)) {
      isValid = false;
    };
    if (Object.values(ranking).every(isBlank)) {
      isValid = false;
    };

    if (!valid) {
      alert('You have already submitted a journal entry today!')
    } else if (isValid === false) {
      alert('Please fill out all fields')
      // otherwise send the body of the log in a post request
    } else {
      const entryObj = createEntry();
      console.log('entry object', entryObj);
      addJournal(entryObj).then((results) => {
          console.log(results);
          // change the view to the log page
          props.changeView('log');
        })
    }
  }

  const createEntry = () => {
    let entryObj = {
      entrydate: today,
      entrytext: journal,
      entrycall: 0,
      mood: 0,
      ranking: 0
    };

    if (call.yes.length > 0) {
      entryObj.entrycall = 0;
    }
    if (call.no.length > 0) {
      entryObj.entrycall = 1;
    }
    if (mood.happy.length > 0) {
      entryObj.mood = 0;
    }
    if (mood.chill.length > 0) {
      entryObj.mood = 1;
    }
    if (mood.tired.length > 0) {
      entryObj.mood = 2;
    }
    if (ranking.once.length > 0) {
      entryObj.ranking = 0;
    }
    if (ranking.twice.length > 0) {
      entryObj.ranking = 1;
    }
    if (ranking.thrice.length > 0) {
      entryObj.ranking = 2;
    }

    return entryObj;
  }

  return (
    <div className="entry-card">
      <div className="date">
        {today}
      </div>
      <div className="journal">
        <form>
          <textarea
          style={styles.textAreaStyle}
          type="text"
          placeholder="Today I..."
          value={journal}
          onChange={(e) => {writeJournal(e)}}>
          </textarea>
          {journal.length > CHAR_LIMIT &&
          <div className="char-error">
            {`You're ${journal.length - CHAR_LIMIT} characters over the limit`}
          </div>}
        </form>
      </div>
      <div className="mood">
        Overall Mood
      </div>
      <div className="choose-mood">
        <div id="happy" style={styles.happy} onClick={() => {select('happy', mood, updateMood, moodBorder)}}>
          <img src="../happy.png"/>
        </div>
        <div id="chill" style={styles.chill} onClick={() => {select('chill', mood, updateMood, moodBorder)}}>
          <img src="../chillin.png"/>
        </div>
        <div id="tired" style={styles.tired} onClick={() => {select('tired', mood, updateMood, moodBorder)}}>
          <img src="../tired.png"/>
        </div>
      </div>
      <div className="called-home">
        Called Home?
      </div>
      <div className="choose-called">
        <div id="yes" style={styles.yes} onClick={() => {select('yes', call, updateCall, callFill)}}>
          Yes!
        </div>
        <div id="no" style={styles.no} onClick={() => {select('no', call, updateCall, callFill)}}>
          No
        </div>
      </div>
      <div className="ranking">
        Thoughts on today's activities?
      </div>
      <div className="choose-ranking">
        <div id="once" style={styles.once} onClick={() => {select('once', ranking, updateRanking, rankingFill)}}>
          Once in a lifetime is enough...
        </div>
        <div id="twice" style={styles.twice} onClick={() => {select('twice', ranking, updateRanking, rankingFill)}}>
          Would do again
        </div>
        <div id="thrice" style={styles.thrice} onClick={() => {select('thrice', ranking, updateRanking, rankingFill)}}>
          MUST TELL EVERYONE I KNOW!
        </div>
      </div>
      <div className="Submit">
        <button className="button" onClick={() => submitJournal()}>Add</button>
        <button className="button" onClick={() => props.changeView('log')}>Delete</button>
      </div>
    </div>
  )
}

export default Create;
