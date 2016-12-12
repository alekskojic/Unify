import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.css';
import axios from 'axios';
import Navbar from './navbar';

class VolunteerRegistration extends Component {
  constructor() {
    super();
    this.state = {
      volunteer_info: {
        first_name: null,
        last_name: null,
        email: null,
        password: null
      },
      retype_password: null,
      missing_field: false,
      matching_passwords: true
    }

    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }
  
  formSubmit(e) {
    e.preventDefault();
    this.setState({missing_field: false});
    let missingField = false;
    let matchingPasswords = true;
    let volunteerInfo = this.state.volunteer_info;
    for (let key in volunteerInfo) {
      if (!volunteerInfo[key]) {
        this.setState({missing_field: true});
        missingField = true;
      }
    }
    if (volunteerInfo.password === this.state.retype_password) {
      this.setState({matching_passwords: true});
      matchingPasswords = true;
    } else {
      this.setState({matching_passwords: false});
      matchingPasswords = false;
    }
    if (!missingField && matchingPasswords) {
      location.href = '/core_values_volunteer'; 
      axios
        .post('/api/volunteers', this.state.volunteer_info)
        .then( (res) => {
          console.log(res);
          location.href = '/core_values_volunteer';
        })
    }
  }

  txtFieldChange(e) {
    let volunteerInfo = this.state.volunteer_info;
    if (e.target.name === "first_name") {
      volunteerInfo.first_name = e.target.value;
      this.setState({volunteer_info: volunteerInfo});
    }
    else if (e.target.name === "last_name") {
      volunteerInfo.last_name = e.target.value;
      this.setState({volunteer_info: volunteerInfo});
    }
    else if (e.target.name === "email") {
      volunteerInfo.email = e.target.value;
      this.setState({volunteer_info: volunteerInfo});
    }
    else if (e.target.name === "password") {
      volunteerInfo.password = e.target.value;
      this.setState({volunteer_info: volunteerInfo});
    }
    else if (e.target.name === "retype_password") {
      this.setState({retype_password: e.target.value});
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="underHeader registerFields">
          <form onSubmit={this.formSubmit} className="createVolunteerForm">
            <span className="fieldLabel">First name:</span>
            <input 
              onChange={this.txtFieldChange}
              className="fieldOrButton inputField" 
              type="text" 
              name="first_name" 
              placeholder="First Name"/>
            <br/>
            <span className="fieldLabel">Last name:</span>
            <input 
              onChange={this.txtFieldChange}
              className="fieldOrButton inputField" 
              type="text" 
              name="last_name" 
              placeholder="Last Name"/>
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
              type="password" 
              name="password" 
              placeholder="Password"/>
            <br/>
            <span className="fieldLabel">Retype Password:</span>
            <input 
              onChange={this.txtFieldChange}
              className="fieldOrButton inputField" 
              type="password" 
              name="retype_password" 
              placeholder="Retype Password"/>
            <br/>
            <span className={this.state.missing_field ? 'showWarning' : 'hideWarning'} >
              One or more fields are missing! 
            </span>
            <span className={!this.state.matching_passwords ? 'showWarning' : 'hideWarning'} >
              Passwords do not match!
            </span>
            <button 
              className="fieldOrButton registerButton" 
              type="submit">
                Create Account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default VolunteerRegistration;