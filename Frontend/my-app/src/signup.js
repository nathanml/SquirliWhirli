import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./login.css";

class Signup extends React.Component{
  constructor(props) {
    super(props);
    // this.validateForm = this.validateForm.bind(this)
    
    // this.goToInternalLink = this.goToInternalLink.bind(this)
    this.state = {
      email: '',
      password: '',
      cpassword: '',
      patient: true,
      nonmatch: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  // validateForm() {
  //   this.setState(this.validateForm)
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }
  handleSubmit(event) {
    event.preventDefault();
    if(!this.checkPassword()) {
        this.setState({
            password: '',
            cpassword: '',
            nonmatch: true
        })
        // var warning = document.getElementById("password-warning");
        // warning.style.display = 'block';
    }
    
  }

  setPassword(value){
    this.setState({password: value})
  }

  setCPassword(value){
    this.setState({cpassword: value})
  }

  // goToInternalLink(path){
  //     var myDomain = 'localhost:3000';
  //     window.location.href = myDomain + "/" + path;
  //   }

  checkPassword(){
      return(this.state.password === (this.state.cpassword))
  }
  render(){
    return (
      <div className="Signup">
        <form onSubmit={this.state.handleSubmit}>
          <FormGroup controlId="email">
            <FormLabel>Enter your Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={e => this.setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="cpassword">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={this.state.cpassword}
              onChange={e => this.setCPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          {/* <div display='none' id="password-warning">
              Passwords do not match: Invalid
          </div> */}
          <Button type="signup" onClick={(e) => {this.handleSubmit(e)}}>
            Create Account
          </Button>
        </form>
      </div>
    );
    //bsSize="large"
  }
}

export default Signup;