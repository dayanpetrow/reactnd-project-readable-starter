import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { fetchAllPosts } from '../actions/posts';
import { connect } from 'react-redux';
//import { capitalize } from '../utils/helpers';
import PostItem from './PostItem'

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  render() {
    const { posts } = this.props
    return (
        <div className="container">
          {posts && posts.map( post => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
    );
  }
}

function mapStateToProps({ posts }, { match }) {
  const category = match.params.category
  return {
    posts: category ? posts.filter(post => post.category === category) : posts
  }
}

export default connect(mapStateToProps, {
  fetchAllPosts
})(PostsList)
