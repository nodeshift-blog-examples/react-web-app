import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import MenuSideNav from './MenuSideNav';

class App extends Component {
  render() {
    console.log("LOUISE logging starts here...");
    return (
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
        </header>
        <MenuSideNav/> 
      </div>
    );
  }
}

export default App;
