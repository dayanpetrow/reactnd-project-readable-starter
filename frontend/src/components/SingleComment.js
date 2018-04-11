import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../utils/helpers';
import { deleteComment, voteComment, editComment } from '../actions/comments';
import { connect } from 'react-redux';


class SingleComment extends Component {

  constructor(props) {
    super(props);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.state = {
      comment: this.props.comment.body,
      read_mode: true,
      localVoteScore: this.props.comment.voteScore
    }
  }

  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }

  switchMode() {
    this.state.read_mode ?
    this.setState({read_mode: false}) : this.setState({read_mode: true});
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

  editComment = (event) => {
    event.preventDefault();
    const new_values = {
      timestamp: Date.now(),
      body: this.state.comment,
    }
    this.props.editComment(this.props.comment.id, new_values);
    this.switchMode();
  }

  render() {
    const { comment } = this.props

    return (
        <div className="comment">
          <p className="comment-details">Posted by <span className="bold">{ comment.author }</span> on <span className="bold">{ helpers.printDate(comment.timestamp) }</span></p>
          {this.state.read_mode ?
            <p className="comment-content">{ comment.body }</p>
            :
            <form onSubmit={this.editComment}>
              <label htmlFor="content">Edit comment:</label>
              <textarea type="text" id="body" name="body" onChange={this.handleCommentChange} rows="4" cols="60" value={this.state.comment} />
              <button type="submit">Update comment</button>
            </form>
          }

          <div className="post-counts">
            Votes: { this.state.localVoteScore }
            <button className="vote-button green" onClick={event => this.upVote(comment.id)}>Up</button>
            <button className="vote-button red" onClick={event => this.downVote(comment.id)}>Down</button>
          </div>

          <button onClick={event => this.switchMode()}>{ this.state.read_mode ? 'Edit post' : 'Cancel'}</button>
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
  voteComment,
  editComment
})(SingleComment)
