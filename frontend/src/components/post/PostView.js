import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as helpers from '../../utils/helpers';
import { fetchPostComments, addComment, fetchComment } from '../../actions/comments'
import { fetchPost, deletePost, votePost } from '../../actions/posts'
import SingleComment from '../SingleComment'

class PostView extends Component {
  static propTypes = {
    post: PropTypes.object,
    comments: PropTypes.array
  }

  state = {
    showNewComment: false
  }

  showComment() {
    this.state.showNewComment ?
    this.setState({showNewComment: false}) : this.setState({showNewComment: true});
  }

  deletePost(post_id) {
    this.props.deletePost(post_id, () => this.props.history.push(`/`))
  }

  upVote(post_id) {
    this.props.votePost(post_id, "upVote")
  }

  downVote(post_id) {
    this.props.votePost(post_id, "downVote")
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postId)
    this.props.fetchPostComments(this.props.match.params.postId)
  }

  addComment = (event) => {
    const { post } = this.props
    event.preventDefault();
    const _ = event.target
    const comment = {
      id: helpers.generateId(),
      timestamp: Date.now(),
      body: _.comment_content.value,
      author: _.comment_author.value,
      parentId: post.id
    }
    this.showComment();
    this.props.addComment(comment)
  }

  render() {
    const { post, comments, comment_count } = this.props

    return (
      <div className="container">
        <button onClick={event => this.props.history.goBack()}>Back</button>
        <div className="post-view">
          <div className="post-container">

            <h3 className="post-title">{ post.title }</h3>

            <p className="post-details">
              Posted by <span className="bold">{ post.author }</span> in <span className="bold">{ helpers.capitalize(post.category) }</span> on <span className="bold">{ helpers.printDate(post.timestamp) }</span>
            </p>

            <p className="post-content">{ post.body }</p>
            <div className="post-counts">
              Votes: { post.voteScore }
              <button className="vote-button green" onClick={event => this.upVote(post.id)}>Up</button>
              <button className="vote-button red" onClick={event => this.downVote(post.id)}>Down</button>
            </div>
            <div className="post-counts">Comments: { comment_count }</div>

            <button onClick={event => this.deletePost(post.id)}>Delete post</button>
            <button onClick={event => this.props.history.push(`/posts/${post.id}/edit`)}>Edit post</button>

          </div>

          <div className="new-comment">
            {this.state.showNewComment
              ?
              <div className="comment">
                <form onSubmit={this.addComment}>
                  <label htmlFor="comment_author">Author</label>
                  <input type="text" id="comment_author" name="comment_author" size="35"/>
                  <label htmlFor="comment_content">Message</label>
                  <textarea type="text" id="comment_content" name="comment_content" rows="4" cols="60" />
                  <button type="submit">Add</button>
                  <button onClick={event => this.showComment()}>Cancel</button>
                </form>
              </div>
              :
              <button onClick={event => this.showComment()}>Add comment</button>
            }

          </div>
          <div id="comments" className="comments-container">
            {
            comments.length > 0 &&
            comments.map(comment => (
                <SingleComment key={comment.id} comment={comment} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ post, comments, comment_count }) {
  return {
    post: post,
    comments: comments,
    comment_count: comments.length
  }
}

export default connect(mapStateToProps, {
  fetchPost,
  fetchPostComments,
  deletePost,
  votePost,
  addComment,
  fetchComment
})(PostView)
