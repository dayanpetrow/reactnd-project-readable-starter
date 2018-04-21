import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAllPosts, sortPosts, deletePost, votePost } from '../../actions/posts';
import { connect } from 'react-redux';
import * as helpers from '../../utils/helpers';
import { Link } from 'react-router-dom';

import FaPlus from 'react-icons/lib/fa/plus'
import FaMinus from 'react-icons/lib/fa/minus'
import FaDelete from 'react-icons/lib/fa/trash'
import FaEdit from 'react-icons/lib/fa/pencil-square'

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  state = {
    sort: 'timestamp'
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  sortPosts(option) {
    this.props.sortPosts(option);
    this.setState({ sort: option });
  }

  deletePost(post_id) {
    this.props.deletePost(post_id, () => {})
  }

  upVote(post_id) {
    this.props.votePost(post_id, "upVote")
  }

  downVote(post_id) {
    this.props.votePost(post_id, "downVote")
  }

  render() {
    const { posts } = this.props
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
              <div className="post-container" key={post.id}>

                <div className="post-actions">
                  <h1>{ this.props.categories }</h1>
                  <button className="delete-button" onClick={event => this.deletePost(post.id)}><FaDelete /> delete post</button>|
                  <button className="edit-button" onClick={event => this.props.history.push(`/posts/${post.id}/edit`)}><FaEdit /> edit post</button>|
                  <button className="upvote-button" onClick={event => this.upVote(post.id)}><FaPlus /> upvote</button>|
                  <button className="downvote-button" onClick={event => this.downVote(post.id)}><FaMinus /> downvote</button>
                </div>

                <h3 className="post-title"><Link to={`/${post.category}/${post.id}`}>{ post.title }</Link></h3>

                <p className="post-details">
                  Posted by <span className="bold">{ post.author }</span> in <span className="bold">{ helpers.capitalize(post.category) }</span> on <span className="bold">{ helpers.printDate(post.timestamp) }</span>
                </p>

                <p className="post-content">{ post.body }</p>
                <div className="post-counts">Votes: { post.voteScore }</div>
                <div className="post-counts">Comments: { post.commentCount }</div>

                <Link className="read-post" to={`/${post.category}/${post.id}`}>
                  Read post
                </Link>
              </div>
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
  sortPosts,
  deletePost,
  votePost
})(PostsList)
