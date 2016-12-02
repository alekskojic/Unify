import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.css';

class LoginRegisterButtons extends Component {
  render() {
    return (
    <div>
			<Link to="/registration"><button className="loginRegisterButtons registerButton spaceBetweenButtons">Create Account</button></Link>
			<Link to="/sign_in"><button className="loginRegisterButtons signInButton">Sign In</button></Link>
		</div>
    );
  }
}

export default LoginRegisterButtons;