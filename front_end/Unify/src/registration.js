import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.css';

class Registration extends Component {
  render() {
    return (
    <div className="registerOptions">
			<div className="registerOption">
				<Link to="/volunteer_registration"><img className="volunteerOptionImage" alt="Volunteer Persona" src="./images/Volunteer_Persona.png"/></Link>
				<div className="squeezeParagraph">Are you a volunteer seeking out for volunteer opportunities?</div>
			</div>
			<br/>
			<div className="registerOption">
				<Link to="/organization_registration"><img className="organizationOptionImage" alt="Organization Persona" src="./images/Organization_Persona.png"/></Link>
				<div className="squeezeParagraph">Are you an organization seeking out for volunteers?</div>
			</div>
    </div>
    );
  }
}

export default Registration;