import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers';
import { fetchPostComments } from '../actions/comments'
import Comment from './Comment'

class PostView extends Component {
  static propTypes = {
    comments: PropTypes.array
  }

  componentWillMount() {
    this.props.fetchPostComments(this.props.post.id)
  }

  render() {
    const { post, comments } = this.props

    return (
      <div className="post-view">
        <div className="post-container">
          <h3>{ post.title } { post.id }</h3>
          <p>
            Posted by <span className="bold">{ post.author }</span> in <span className="bold">{ capitalize(post.category) }</span> on <span className="bold">{ post.timestamp }</span>
          </p>
          <p className="post-content">{ post.body }</p>
          <p>Vote score: { post.voteScore }</p>
          <p>Comment count: { post.commentCount }</p>
          <button className="details">Read post</button>
        </div>
        <div className="comments-container">
          {comments && comments.filter(comment => comment.parentId === post.id).map(comment => (
              <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ comments }) {
  return {
    comments: comments
  }
}

export default connect(mapStateToProps, {
  fetchPostComments
})(PostView)
