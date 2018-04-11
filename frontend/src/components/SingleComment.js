import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../utils/helpers';
import { deleteComment, voteComment, editComment } from '../actions/comments';
import { connect } from 'react-redux';

/* icons */
import FaPlus from 'react-icons/lib/fa/plus'
import FaMinus from 'react-icons/lib/fa/minus'
import FaDelete from 'react-icons/lib/fa/trash'
import FaEdit from 'react-icons/lib/fa/pencil-square'
import FaBack from 'react-icons/lib/fa/angle-double-left'

class SingleComment extends Component {

  static propTypes = {
    comment: PropTypes.object
  }

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

          <div className="post-actions">
            <button className="delete-button" onClick={event => this.deleteComment(comment.id)}><FaDelete /> delete comment</button>|
            <button className="edit-button" onClick={event => this.switchMode()}><FaEdit /> { this.state.read_mode ? 'edit comment' : 'cancel edit'}</button>|
            <button className="upvote-button" onClick={event => this.upVote(comment.id)}><FaPlus /> upvote</button>|
            <button className="downvote-button" onClick={event => this.downVote(comment.id)}><FaMinus /> downvote</button>
          </div>

          <p className="comment-details">
            Posted by <span className="bold">{ comment.author }</span> on
            <span className="bold"> { helpers.printDate(comment.timestamp) } </span>
            | Votes: { this.state.localVoteScore }
            </p>
          {this.state.read_mode ?
            <p className="comment-content">{ comment.body }</p>
            :
            <form onSubmit={this.editComment}>
              <textarea className="comment-textarea" type="text" id="body" name="body" onChange={this.handleCommentChange} rows="2" cols="60" value={this.state.comment} />
              <div className="inline-buttons">
                <button type="submit">Update comment</button>
                <button onClick={event => this.switchMode()}>Cancel</button>
              </div>
            </form>
          }
          
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
