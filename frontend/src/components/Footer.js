import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="header footer">
        <header className="App-header">
          <div className="footer-links">
            <a href="http://dayanpetrow.eu" target="_blank">Personal website</a>
            <a href="https://github.com/dayanpetrow/reactnd-project-readable-starter">Github repository</a>
          </div>
        </header>
      </div>
    );
  }
}

export default Footer
