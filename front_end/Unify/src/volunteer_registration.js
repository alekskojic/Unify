import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.css';
import axios from 'axios';

class VolunteerRegistration extends Component {
  constructor() {
    super();
    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null
    }

    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }
  formSubmit(e) {
    e.preventDefault();
    axios
      .post('/api/volunteers', this.state)
      .then( (res) =>{
        console.log(res);
      })
  }

  txtFieldChange(e){
    if(e.target.name === "first_name"){
      this.setState({
        first_name: e.target.value
      })
    }
    else if(e.target.name === "last_name"){
      this.setState({
        last_name: e.target.value
      });
    }
    else if(e.target.name === "email"){
      this.setState({
        email: e.target.value
      });
    }
    else if(e.target.name === "password"){
      this.setState({
        password: e.target.value
      });
    }
  }
  render() {
    return (
      <div className="underHeader helpingHand">
        <form onSubmit={this.formSubmit} className="createVolunteerForm">
          <div className="inline">
            <div>
              <span className="fieldLabel">First name:</span>
              <input 
                onChange={this.txtFieldChange}
                className="fieldOrButton halfInputField" 
                type="text" 
                name="first_name" 
                placeholder="First Name"/>
            </div>
            <div>
              <span className="fieldLabel">Last name:</span>
              <input 
                onChange={this.txtFieldChange}
                className="fieldOrButton halfInputField" 
                type="text" 
                name="last_name" 
                placeholder="Last Name"/>
            </div>
          </div>
          <br/>
          <span className="fieldLabel">Email:</span>
          <input 
            onChange={this.txtFieldChange}
            className="fieldOrButton inputField" 
            type="text" 
            name="email" 
            placeholder="Email"/>
          <br/>
          <span className="fieldLabel">Password:</span>
          <input 
            onChange={this.txtFieldChange}
            className="fieldOrButton inputField" 
            type="text" 
            name="password" 
            placeholder="Password"/>
          <br/>
          <span className="fieldLabel">Retype Password:</span>
          <input 
            onChange={this.txtFieldChange}
            className="fieldOrButton inputField" 
            type="text" 
            name="retype_password" 
            placeholder="Retype Password"/>
          <br/>
          <button 
            className="fieldOrButton registerButton" 
            type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default VolunteerRegistration;