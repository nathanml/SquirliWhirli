import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import Signup from './signup.js'

class App extends Component{
  render(){
    return (
      <div className="App">
        <div>
          <Signup />
        </div>
      </div>
    );
  }  
}

export default App;
