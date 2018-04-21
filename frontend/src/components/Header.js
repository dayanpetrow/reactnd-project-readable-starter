import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => (
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

export default Header
