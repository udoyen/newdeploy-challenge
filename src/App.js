import React from 'react';
// import logo from './logo.svg';
import glogo from './glogo.png';
// import me2 from './me2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="profile-header">
          My Cloud Challenge React Application
        </div>
        <div class="flex-container">
          <div id="profile" class="column profile">
            {/* <img src={me2} className="" alt="profile" width="400" height="400"/> */}
          </div>
          <div id="google-logo" className="column google-stamp">
            <img src={glogo} className="gcp-logo" alt="google" />
          </div>          
        </div>
         <div className="profile-links">
          <a href="https://github.com/udoyen" target="_blank">Github</a> &nbsp; <a href="https://askubuntu.com/users/459561/george-udosen" target="_blank">AskUbuntu</a>
             
             &nbsp; <a href="https://stackoverflow.com/users/story/2782188" target="_blank">Stackoverflow</a>
          </div>
      </header>
    </div>
  );
}

export default App;
