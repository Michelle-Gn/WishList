import React, {useState} from 'react';

const EntryCard = (props) => {

  const moodBorder = '3px solid rgba(19, 94, 74, 0.8)';
  const callFill = '#F6BB42';
  const rankingFill = '#F6BB42';

  let moodStyles = {};

  if (props.journal[0].mood === 0) {
    moodStyles = {happy: {border: moodBorder}, chill: {border: ''}, tired: {border: ''}}
  } else if (props.journal[0].mood === 1) {
    moodStyles = {happy: {border: ''}, chill: {border: moodBorder}, tired: {border: ''}}
  } else {
    moodStyles = {happy: {border: ''}, chill: {border: ''}, tired: {border: moodBorder}}
  }

  let callStyles = {};

  if (props.journal[0].call === 0) {
    callStyles = {yes: {backgroundColor: callFill}, no: {backgroundColor: ''}}
  } else {
    callStyles = {yes: {backgroundColor: ''}, no: {backgroundColor: callFill}}
  }

  let rankingStyles = {};

  if (props.journal[0].ranking === 0) {
    rankingStyles = {once: {backgroundColor: rankingFill}, twice: {backgroundColor: ''}, thrice: {backgroundColor: ''}}
  } else if (props.journal[0].ranking === 1) {
    rankingStyles = {once: {backgroundColor: ''}, twice: {backgroundColor: rankingFill}, thrice: {backgroundColor: ''}}
  } else {
    rankingStyles = {once: {backgroundColor: ''}, twice: {backgroundColor: ''}, thrice: {backgroundColor: rankingFill}}
  }

  const styles = {
    textAreaStyle: {
      width: '800px',
      height: '50px',
      border: '3px solid rgba(19, 94, 74, 0.8)'
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
        <div id="happy" style={moodStyles.happy}>
          <img src="../happy.png"/>
        </div>
        <div id="chill" style={moodStyles.chill}>
          <img src="../chillin.png"/>
        </div>
        <div id="tired" style={moodStyles.tired}>
          <img src="../tired.png"/>
        </div>
      </div>
      <div className="called-home">
        Called Home?
      </div>
      <div className="choose-called">
        <div id="yes" style={callStyles.yes}>
          Yes!
        </div>
        <div id="no" style={callStyles.no}>
          No
        </div>
      </div>
      <div className="ranking">
        Thoughts on today's activities?
      </div>
      <div className="choose-ranking">
        <div id="once" style={rankingStyles.once}>
          Once in a lifetime is enough...
        </div>
        <div id="twice" style={rankingStyles.twice}>
          Would do again
        </div>
        <div id="thrice" style={rankingStyles.thrice}>
          MUST TELL EVERYONE I KNOW!
        </div>
      </div>
    </div>
  )
}

export default EntryCard;
