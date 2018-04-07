import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Header from './Header';
import PostsList from './PostsList';
import PostView from './PostView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CategoriesList />
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route exact path="/:category" component={PostsList} />
          <Route exact path="/:category/:postId" component={PostView} />
        </Switch>
      </div>
    );
  }
}

export default App
