import React from 'react';
import { Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import VideoComponent from './VideoComponent.js'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const { connect } = require('twilio-video');
const backendUrl = 'localhost:1000'

let dom = document.getElementById("app")

class Videochat extends React.Component {
  constructor(props) {
    super(props)
    this.getAccessToken = this.getAccessToken.bind(this)
  }

  state = {
    backendUrl: 'http://localhost:1000',
    userName: 'Bob',
    id: '123456',
    accessToken: '',
    dom : document.getElementById("app")
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

            participant.tracks.forEach(publication => {
              if (publication.isSubscribed) {
                const track = publication.track;
                document.getElementById('remote-media-div').appendChild(track.attach());
              }
            });
          
            participant.on('trackSubscribed', track => {
              document.getElementById('remote-media-div').appendChild(track.attach());
            });
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
            Start Videochat
          </Button>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <AppBar title ="React Twilio Video" />
              <VideoComponent/>
            </div>
            <div id='remote-media-div'>

            </div>
          </MuiThemeProvider>
        </header>
      </div>
    );
  }
}

export default Videochat;
