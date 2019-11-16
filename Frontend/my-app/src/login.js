import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./login.css";

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goToInternalLink = this.goToInternalLink.bind(this)
  }

  state = {
    email: '',
    password: ''
  }

  validateForm() {
    this.setState(this.validateForm)
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  goToInternalLink(path){
      var myDomain = 'http://example.com';
      window.location.href = myDomain + "/" + path;
    }
  render(){
    return (
      <div className="Login">
        <form onSubmit={this.state.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={e => this.state.email= e.target.value}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={e => this.state.setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" onClick={this.validateForm()} type="submit">
            Login
          </Button>
          <input type="button" value="Go to Signup" onclick={"goToInteralLink('android_asset/home.html')"}/>
        </form>
      </div>
    );
  }
}

export default Login