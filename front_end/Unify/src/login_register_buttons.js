import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.css';

class LoginRegisterButtons extends Component {
  render() {
    return (
    <div>
			<div>
				<Link to="/sign_in"><button className="signInButton">Sign In</button></Link>
			</div>
			<div>
				<Link to="/registration"><button className="registerButton">Create Account</button></Link>
			</div>
		</div>
    );
  }
}

export default LoginRegisterButtons;