import React, { Component } from 'react';
import './App.css';
import LoginRegisterButtons from './login_register_buttons';

class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="logoTitleContainer">
          <img className="logo" src="/images/Unify_Logo.png"/>
          <div className="title">
            <div>
              UNIFY
            </div>
            <div className="subTitle">
              Volunteers and Organizations<br/>
              <div className="underSubTitle">Connected | Unified | United</div>
            </div>
          </div>
        </div>
        <br/>
        <div className="headline">
          Stay Connected.<br/>
          Make a Difference Socially.
        </div>
        <LoginRegisterButtons/>
      </div>
    );
  }
}

export default Home;