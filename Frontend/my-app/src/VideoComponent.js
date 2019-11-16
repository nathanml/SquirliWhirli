import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Video from 'twilio-video'
import axios from 'axios'

export default class VideoComponent extends Component {
    constructor(props) {
      super();
      this.state = {
        identity: null, 
        roomName: '',
        roomNameErr: false, 
        previewTracks: null,
        localMediaAvailable: false,
        hasJoinedRoom: false,
        activeRoom: null
     };
    }

    componentDidMount() {
        // console.log(this.state.access)
        axios.get()
    }
   
    render() {
      return (
        <div>Video Component</div>
      );
    }
   }