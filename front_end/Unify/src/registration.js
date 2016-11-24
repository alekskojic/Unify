import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.css';

class Registration extends Component {
  render() {
    return (
    <div className="bootstrapVerticalCenter">
			<div className="col-sm-6">
				<Link to="/volunteer_registration"><img alt="Volunteer Persona" src="./images/Volunteer_Persona.png"/></Link>
				<div className="squeezeParagraph">Are you a volunteer seeking out for volunteer opportunities?</div>
			</div>
			<br/>
			<div className="col-sm-6">
				<Link to="/organization_registration"><img alt="Organization Persona" src="./images/Organization_Persona.png"/></Link>
				<div className="squeezeParagraph">Are you an organization seeking out for volunteers?</div>
			</div>
    </div>
    );
  }
}

export default Registration;