import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../utils/helpers';
import { deleteComment, voteComment } from '../actions/comments';
import { connect } from 'react-redux';


class SingleComment extends Component {

  state = {
    read_mode: false,
    localVoteScore: this.props.comment.voteScore
  }

  deleteComment(comment_id) {
    this.props.deleteComment(comment_id, () => console.log("comment deleted"))
  }

  upVote(comment_id) {
    this.setState({ localVoteScore: this.state.localVoteScore+1 })
    this.props.voteComment(comment_id, "upVote")
  }

  downVote(comment_id) {
    this.setState({ localVoteScore: this.state.localVoteScore-1 })
    this.props.voteComment(comment_id, "downVote")
  }

  render() {
    const { comment } = this.props

    return (
        <div className="comment">
          <p className="comment-details">Posted by <span className="bold">{ comment.author }</span> on <span className="bold">{ helpers.printDate(comment.timestamp) }</span></p>
          {this.state.read_mode ?
            <p className="comment-content">{ comment.body }</p>
            :
            <p>will edit</p>
          }

          <div className="post-counts">
            Votes: { this.state.localVoteScore }
            <button className="vote-button green" onClick={event => this.upVote(comment.id)}>Up</button>
            <button className="vote-button red" onClick={event => this.downVote(comment.id)}>Down</button>
          </div>

          <button onClick={event => this.deleteComment(comment.id)}>Delete post</button>
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
  deleteComment,
  voteComment
})(SingleComment)
