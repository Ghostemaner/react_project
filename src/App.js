import React from 'react';
import './App.css';
import { store } from './store'
import Weather from './components/Widgets/Weather';
import Watch from './components/Widgets/Watch';


function App() {


  return (
    <>
      
      <Weather />
      <div className="App App-header main">
      
        <p className='title-home'>
        <Watch /><br/><br/>
        Welcome to React.Messenger!</p>
        
      </div>
      
    </>
  );
}

export default App;
