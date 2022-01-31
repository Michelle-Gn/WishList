import React from 'react'

const Create = (props) => {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const textareaStyle = {
    width: '800px',
    height: '50px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }

  return (
    <div className="entry-card">
      <div className="date">
        {today}
      </div>
      <div className="form">
        <form style={textareaStyle}>
          <textarea style={textareaStyle} className="summary" type="text" placeholder="Today I..."></textarea>
        </form>
      </div>
      <div className="mood">
        Overall Mood
      </div>
      <div className="choose-mood">
        <div className="mood">
          <img src="../happy.png"/>
        </div>
        <div className="mood">
          <img src="../chillin.png"/>
        </div>
        <div className="mood">
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
