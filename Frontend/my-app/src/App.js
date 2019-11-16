import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Calendar from './MyCalendar.js'

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
         <div>
          <Calendar />
        </div> 
      </header>
    </div>
  );}
  
}

export default App;
