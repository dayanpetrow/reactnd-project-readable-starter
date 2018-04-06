import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
//import { Link, Route, withRouter, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CategoriesList />
      </div>
    );
  }
}

export default App
