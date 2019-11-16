import React from 'react';
import { Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

export class HomePage extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        userName: 'Bob',
        id: '123456'
      }
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <Link to="/videochat">
              <Button>
                To Videochat
              </Button>
            </Link>
          </header>
        </div>
      );
    }
}

export default HomePage

// export default App;
