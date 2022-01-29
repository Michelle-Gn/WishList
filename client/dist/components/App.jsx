import React, {useState} from 'react';
import Explore from './Explore.jsx';
import Log from './Log.jsx';
import Navbar from '../components/Nav.jsx';

const App = (props) => {

  const [view, updateView] = useState('log');

  const changeView = (option) => {
    updateView(option);
  }

  const getView = () => {
    if (view === 'log') {
      return <Log changeView={changeView}/>
    }
    if (view === 'explore') {
      return <Explore changeView={changeView}/>
    }
  }

  return (
    <div>
      <div>
        <Navbar changeView={changeView}/>
      </div>
      <div>
        {getView()}
      </div>
    </div>
  )
}

export default App;