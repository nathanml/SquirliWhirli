import React from 'react';
import { Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

const { connect } = require('twilio-video');
const backendUrl = 'localhost:1000'

class Videochat extends React.Component {
  constructor(props) {
    super(props)
    this.getAccessToken = this.getAccessToken.bind(this)
  }

  state = {
    backendUrl: 'http://localhost:1000',
    userName: 'Bob',
    id: '123456',
    accessToken: ''
  }

  getAccessToken(){
    fetch(`${this.state.backendUrl}/video?name=${this.state.userName}&id=${this.state.id}`)
      .then(res => res.json())
      .then((result) => 
        this.connectToRoom(result, this.state.id)
      )
  }

  connectToRoom(accessToken, id) {
    connect(accessToken, {name: id}).then(room => {
        console.log(`Successfully joined a Room: ${room}`);
        room.on('participantConnected', participant => {
            console.log(`A remote Participant connected ${participant}`)
        });
    }, error => {
        console.log(`Unable to connect to Room: ${error.message}`)
    });
}

  render() {
    return (
      <div className="videochat">
        <header className="App-header">
          <Button onClick={this.getAccessToken}>
            To Videochat
          </Button>
        </header>
      </div>
    );
  }
}

export default Videochat;
