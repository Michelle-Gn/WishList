import React, {useState} from 'react';

const Create = (props) => {

  const [borderColor, updateColor] = useState({happy: '', chill: '', tired: ''});
  const [call, updateCall] = useState({call: 0});

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  let changeBorder = (id) => {
    console.log('borderColor', borderColor);
    console.log('id', id);
    console.log('values', borderColor[id]);
    if (borderColor[id] === '') {
      updateColor({...borderColor, [id]: '3px solid rgba(19, 94, 74, 0.8)'});
    } else {
      updateColor({...borderColor, [id]: ''});
    }
  };

  const styles = {
    textAreaStyle: {
      width: '800px',
      height: '50px',
      border: '3px solid rgba(19, 94, 74, 0.8)'
    },

    happy: {
      border: borderColor.happy
    },

    chill: {
      border: borderColor.chill
    },

    tired: {
      border: borderColor.tired
    }
  }

  return (
    <div className="entry-card">
      <div className="date">
        {today}
      </div>
      <div className="form">
        <form style={styles.textareaStyle}>
          <textarea style={styles.textareaStyle} className="summary" type="text" placeholder="Today I..."></textarea>
        </form>
      </div>
      <div className="mood">
        Overall Mood
      </div>
      <div className="choose-mood">
        <div id="happy" style={styles.happy} onClick={() => {changeBorder('happy')}}>
          <img src="../happy.png"/>
        </div>
        <div className="chill" style={styles.chill} onClick={() => {changeBorder('chill')}}>
          <img src="../chillin.png"/>
        </div>
        <div className="tired" style={styles.tired} onClick={() => {changeBorder('tired')}}>
          <img src="../tired.png"/>
        </div>
      </div>
      <div className="called-home">
        Called Home?
      </div>
      <div className="choose-called">
        <div className="call-choice">
          Yes!
        </div>
        <div className="call-choice">
          No
        </div>
      </div>
      <div className="ranking">
        Thoughts on today's activities?
      </div>
      <div className="choose-ranking">
        <div className="ranking-type">
          Once in a lifetime is enough...
        </div>
        <div className="ranking-type">
          Would do again
        </div>
        <div className="ranking-type">
          MUST TELL EVERYONE I KNOW!
        </div>
      </div>
      <div className="Submit">
        <button className="button">Add</button>
        <button className="button" onClick={() => props.changeView('log')}>Delete</button>
      </div>
    </div>
  )

}

export default Create;
