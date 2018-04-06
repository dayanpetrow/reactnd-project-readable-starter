import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import { fetchCategories } from '../actions/categories';
import { connect } from 'react-redux';

class App extends Component {
  static propTypes = {
    categories: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {categories && categories.map(category => (
            <p key={category.name}>{category.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchCategories
})(App))
