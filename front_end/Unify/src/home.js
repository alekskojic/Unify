import React, { Component } from 'react';
import './App.css';
import LoginRegisterButtons from './login_register_buttons';

class Home extends Component {
  render() {
    return (
      <div className="verticalCenter">
        <img className="offsetLogo" alt="Unify Logo" src="./images/Unify_Logo_withtext.png"/>
        <LoginRegisterButtons/>
      </div>

    );
  }
}

export default Home;