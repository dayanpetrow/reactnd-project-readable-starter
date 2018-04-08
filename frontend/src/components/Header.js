import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable</h1>
          <p className="App-intro">
            React Nanodegree on Udacity
          </p>
        </header>
      </div>
    );
  }
}

export default Header
