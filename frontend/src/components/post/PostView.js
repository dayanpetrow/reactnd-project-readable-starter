import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as helpers from '../../utils/helpers';
import { fetchPostComments } from '../../actions/comments'
import { fetchPost } from '../../actions/posts'
import Comment from '../Comment'

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

            <h3 className="post-title">{ post.title }</h3>

            <p className="post-details">
              Posted by <span className="bold">{ post.author }</span> in <span className="bold">{ helpers.capitalize(post.category) }</span> on <span className="bold">{ helpers.printDate(post.timestamp) }</span>
            </p>

            <p className="post-content">{ post.body }</p>
            <div className="post-counts">Votes: { post.voteScore }</div>
            <div className="post-counts">Comments: { post.commentCount }</div>

          </div>
          <div className="comments-container">
            {
            comments.length > 0
            ? comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))
            : <div>Be the first to comment on this post!</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ post, comments }) {
  return {
    post: post,
    comments: comments
  }
}

export default connect(mapStateToProps, {
  fetchPost,
  fetchPostComments
})(PostView)
