import React, {useState} from 'react';
import Navbar from '../components/Nav.jsx';
import Explore from './Explore.jsx';
import Log from './Log.jsx';
import Create from './Create.jsx';

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
    if (view === 'create') {
      return <Create changeView={changeView}/>
    }
  }

  return (
    <div>
      <Navbar changeView={changeView}/>
      <div>
        {getView()}
      </div>
    </div>
  )
}

export default App;