import React from 'react';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='App'>
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <MainDash></MainDash>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default App;