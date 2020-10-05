import React from 'react';
import logo from './logo.svg';
import WindowOpener from './WindowOpener';

const Main = () => {
    return(
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <WindowOpener url='/login' onSuccess={console.log}>Verify With Instagram</WindowOpener>
      </header>
    </div>
    )
}

export default Main;