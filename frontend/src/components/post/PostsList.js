import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { fetchAllPosts, sortPosts } from '../../actions/posts';
import { connect } from 'react-redux';
import PostItem from './PostItem'

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  render() {
    const { posts, sortPosts } = this.props
    return (
        <div className="container">

          {posts.length > 1 &&
            <div className="sorts">
              Sort by:
              <button onClick={event => sortPosts('timestamp')}>Timestamp</button>
              <button onClick={event => sortPosts('votescore')}>VoteScore</button>
              <button onClick={event => sortPosts('ccount')}>Comments</button>
            </div>
          }

          {posts.length > 0
            ?
            posts.map( post => (
              <PostItem post={post} key={post.id} />
            ))
            :
            <div className="no-posts">
              There are no posts in this category.
            </div>
          }

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
  fetchAllPosts,
  sortPosts
})(PostsList)
