import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Welcome to SquirliWhirli! Please login to continue, or create an account if you're  a new user
        </header>
        <div>
          <Login />
        </div>
      </div>
    );
  }  
}

export default App;
