import React from 'react';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='App'>
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <MainDash></MainDash>
        <div>Slot 3</div>
      </div>
    </div>
  );
};

export default App;