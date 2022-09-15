import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='App'>
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <div>Slot 2</div>
        <div>Slot 3</div>
      </div>
    </div>
  );
};

export default App;