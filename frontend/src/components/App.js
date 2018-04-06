import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import '../App.css';
//import { Link, Route, withRouter, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Header from './Header';
import PostsList from './PostsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CategoriesList />
        <PostsList />
      </div>
    );
  }
}

export default App
