import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./login.css";

class Login extends React.Component{
  constructor(props) {
    super(props);
    // this.validateForm = this.validateForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.goToInternalLink = this.goToInternalLink.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  // validateForm() {
  //   this.setState(this.validateForm)
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  handleSubmit(event) {
    event.preventDefault();
  }

  setPassword(value){
    this.setState({password: value})
  }

  // goToInternalLink(path){
  //     var myDomain = 'localhost:3000';
  //     window.location.href = myDomain + "/" + path;
  //   }


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
              onChange={e => this.setState({email: e.target.value})}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={e => this.setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" type="submit" onSubmit={this.handleSubmit}>
            Login
          </Button>
          <Button block bsSize="large" type="signup" onSubmit={this.handleSubmit}>
            Create Account
          </Button>
        </form>
      </div>
    );
  }
}

export default Login