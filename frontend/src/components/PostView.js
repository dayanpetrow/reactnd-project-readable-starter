import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers';
import { fetchPostComments } from '../actions/comments'
import { fetchPost } from '../actions/posts'
import Comment from './Comment'

class PostView extends Component {
  static propTypes = {
    post: PropTypes.object,
    comments: PropTypes.array
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postId)
    this.props.fetchPostComments(this.props.match.params.postId)
  }

  render() {
    const { post, comments } = this.props

    return (
      <div className="container">
        <div className="post-view">
          <div className="post-container">
            <h3>{ post.title }</h3>
            <p>
              Posted by <span className="bold">{ post.author }</span> in <span className="bold">{ capitalize(post.category) }</span> on <span className="bold">{ post.timestamp }</span>
            </p>
            <p className="post-content">{ post.body }</p>
            <p>Vote score: { post.voteScore }</p>
            <p>Comment count: { post.commentCount }</p>
            <button className="details">Read post</button>
          </div>
          <div className="comments-container">
            {comments && comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ post, comments }) {
  console.log("mapstate: ", comments, post)
  return {
    post: post,
    comments: comments
  }
}

export default connect(mapStateToProps, {
  fetchPost,
  fetchPostComments
})(PostView)
