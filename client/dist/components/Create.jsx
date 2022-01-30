import React from 'react'

const Create = (props) => {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  return (
    <div className="entry-card">
      <div className="date">
        {today}
      </div>
      <div className="form">
        <form>
          <textarea className="summary" type="text" placeholder="Today I..."></textarea>
        </form>
      </div>
      <div className="mood">
        Overall Mood
      </div>
      <div className="choose-mood">
        <i className="far fa-meh"></i>
        <div className="mood">
          Chillin'
        </div>
        <div className="mood">
          Could be better
        </div>
        <div className="mood">
          Tired
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
      <div className="Ranking">
        <div className="Ranking-type">
          Once in a lifetime is enough...
        </div>
        <div className="Ranking-type">
          Would do again
        </div>
        <div className="Ranking-type">
          MUST TELL EVERYONE I KNOW!
        </div>
      </div>
      <div className="Submit">
        <button>Add</button>
        <button onClick={() => props.changeView('log')}>Delete</button>
      </div>
    </div>
  )

}

export default Create;
