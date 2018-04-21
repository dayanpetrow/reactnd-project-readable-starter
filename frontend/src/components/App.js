import React, { Component } from 'react';
import '../assets/App.css';
import { Route, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Header from './Header';
import Footer from './Footer';
import PostsList from './post/PostsList';
import PostView from './post/PostView';
import PostNew from './post/PostNew';
import PostEdit from './post/PostEdit';
import NotFound from './NotFound';

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
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App
