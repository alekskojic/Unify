import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.css';

class VolunteerRegistration extends Component {
  constructor() {
    super();
    this.state = {volunteer: {}};

    // this.formSubmit = this.formSubmit.bind(this);
    // this.txtFieldChange = this.txtFieldChange.bind(this);
  }
  
  render() {
    return (
      <div className="underHeader helpingHand">
        <form className="createVolunteerForm">
          <div className="inline">
            <div>
              <span className="fieldLabel">First name:</span>
              <input 
                className="fieldOrButton halfInputField" 
                type="text" 
                name="first_name" 
                placeholder="First Name"/>
            </div>
            <div>
              <span className="fieldLabel">Last name:</span>
              <input 
                className="fieldOrButton halfInputField" 
                type="text" 
                name="last_name" 
                placeholder="Last Name"/>
            </div>
          </div>
          <br/>
          <span className="fieldLabel">Email:</span>
          <input 
            className="fieldOrButton inputField" 
            type="text" 
            name="email" 
            placeholder="Email"/>
          <br/>
          <span className="fieldLabel">Password:</span>
          <input 
            className="fieldOrButton inputField" 
            type="text" 
            name="password" 
            placeholder="Password"/>
          <br/>
          <span className="fieldLabel">Retype Password:</span>
          <input 
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