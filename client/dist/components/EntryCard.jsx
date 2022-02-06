import React, {useState} from 'react';

const EntryCard = (props) => {

  const moodBorder = '3px solid rgba(19, 94, 74, 0.8)';
  const callFill = '#F6BB42';
  const rankingFill = '#F6BB42';

  // mood state
  let moodState = {};

  if (props.journal[0].mood === 0) {
    moodState = {happy: moodBorder, chill: '', tired: ''}
  } else if (props.journal[0].mood === 1) {
    moodState = {happy: '', chill: moodBorder, tired: ''}
  } else {
    moodState = {happy: '', chill: '', tired: moodBorder};
  }

  // call state
  let callState = {};

  if (props.journal[0].call === 0) {
    callState = {yes: callFill, no: ''};
  } else {
    callState = {yes: '', no: callFill}
  }

  // ranking state
  let rankingState = {};

  if (props.journal[0].ranking === 0) {
    rankingState = {once: rankingFill, twice: '', thrice: ''};
  } else if (props.journal[0].ranking === 1) {
    rankingState = {once: '', twice: rankingFill, thrice: ''};
  } else {
    rankingState = {once: '', twice: '', thrice: rankingFill};
  }

  const [mood, updateMood] = useState(moodState);
  const [call, updateCall] = useState(callState);
  const [ranking, updateRanking] = useState(rankingState);

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

  return (
    <div className="entry-card">
      <div className="date">
        {props.journal[0].date}
      </div>
      <div className="journal" style={styles.textAreaStyle}>
        {props.journal[0].entrytext}
      </div>
      <div className="mood">
        Overall Mood
      </div>
      <div className="choose-mood">
        <div id="happy" style={styles.happy}>
          <img src="../happy.png"/>
        </div>
        <div id="chill" style={styles.chill}>
          <img src="../chillin.png"/>
        </div>
        <div id="tired" style={styles.tired}>
          <img src="../tired.png"/>
        </div>
      </div>
      <div className="called-home">
        Called Home?
      </div>
      <div className="choose-called">
        <div id="yes" style={styles.yes}>
          Yes!
        </div>
        <div id="no" style={styles.no}>
          No
        </div>
      </div>
      <div className="ranking">
        Thoughts on today's activities?
      </div>
      <div className="choose-ranking">
        <div id="once" style={styles.once}>
          Once in a lifetime is enough...
        </div>
        <div id="twice" style={styles.twice}>
          Would do again
        </div>
        <div id="thrice" style={styles.thrice}>
          MUST TELL EVERYONE I KNOW!
        </div>
      </div>
    </div>
  )
}

export default EntryCard;
