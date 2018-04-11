import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAllPosts, sortPosts } from '../../actions/posts';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  state = {
    sort: 'timestamp'
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  sortPosts(option) {
    this.props.sortPosts(option);
    this.setState({ sort: option });
  }
  render() {
    const { posts, sortPosts } = this.props
    return (
        <div className="container">

          {posts.length > 1 &&
            <div className="sorts">
              Sort by:
              <button className={this.state.sort === 'timestamp' ? 'active' : ''}
                onClick={event => this.sortPosts('timestamp')}>Timestamp</button> |
              <button className={this.state.sort === 'votescore' ? 'active' : ''}
                onClick={event => this.sortPosts('votescore')}>VoteScore</button> |
              <button className={this.state.sort === 'ccount' ? 'active' : ''}
                onClick={event => this.sortPosts('ccount')}>Comments</button>
            </div>
          }

          {posts.length > 0
            ?
            posts.map( post => (
              <PostItem post={post} key={post.id} />
            ))
            :
            <div className="no-posts">
              <h3>There are no posts in this category.</h3>
              <h3>
                <Link to={`/posts/new`}>New post</Link>
              </h3>
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
