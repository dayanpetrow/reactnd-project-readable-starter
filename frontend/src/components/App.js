import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import '../assets/App.css';
import { Route, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Header from './Header';
import PostsList from './post/PostsList';
import PostView from './post/PostView';
import PostNew from './post/PostNew';
import PostEdit from './post/PostEdit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CategoriesList />
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route exact path="/posts/new" component={PostNew} />
          <Route exact path="/posts/:postId/edit" component={PostEdit} />
          <Route exact path="/:category" component={PostsList} />
          <Route exact path="/:category/:postId" component={PostView} />

        </Switch>
      </div>
    );
  }
}

export default App
