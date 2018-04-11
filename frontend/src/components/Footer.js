import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="header footer">
        <header className="App-header">
          <div className="footer-links">
            <a href="http://dayanpetrow.eu" target="_blank" rel="noopener noreferrer">Personal website</a>
            <a href="https://github.com/dayanpetrow/reactnd-project-readable-starter"
              target="_blank" rel="noopener noreferrer">Github repository</a>
          </div>
        </header>
      </div>
    );
  }
}

export default Footer
