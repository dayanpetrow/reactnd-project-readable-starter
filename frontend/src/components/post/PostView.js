import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as helpers from '../../utils/helpers';
import { fetchPostComments, addComment } from '../../actions/comments'
import { fetchPost, deletePost, votePost } from '../../actions/posts'
import SingleComment from '../SingleComment'
import NotFound from '../NotFound'

/* icons */
import FaPlus from 'react-icons/lib/fa/plus'
import FaMinus from 'react-icons/lib/fa/minus'
import FaDelete from 'react-icons/lib/fa/trash'
import FaEdit from 'react-icons/lib/fa/pencil-square'
import FaBack from 'react-icons/lib/fa/angle-double-left'

class PostView extends Component {
  static propTypes = {
    post: PropTypes.object,
    comments: PropTypes.array
  }

  state = {
    showNewComment: false,
    empty_comment_error: false
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
    if(_.comment_content.value === '' || _.comment_author.value === '') {
      this.setState({ empty_comment_error: true });
      return
    }
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
      (!post.id ?
        <NotFound />
        :
        <div className="container">
          <div className="post-view">
            <div className="post-container">



              <div className="post-actions">
                <button className="back-button" onClick={event => this.props.history.push(`/${post.category}`)}><FaBack /> back to category</button>|
                <button className="delete-button" onClick={event => this.deletePost(post.id)}><FaDelete /> delete post</button>|
                <button className="edit-button" onClick={event => this.props.history.push(`/posts/${post.id}/edit`)}><FaEdit /> edit post</button>|
                <button className="upvote-button" onClick={event => this.upVote(post.id)}><FaPlus /> upvote</button>|
                <button className="downvote-button" onClick={event => this.downVote(post.id)}><FaMinus /> downvote</button>
              </div>

              <h3 className="post-title">{ post.title }</h3>

              <p className="post-details">
                Posted by <span className="bold">{ post.author }</span> in <span className="bold">{ helpers.capitalize(post.category) }</span> on <span className="bold">{ helpers.printDate(post.timestamp) }</span>
              </p>

              <p className="post-content">{ post.body }</p>

              <div className="post-counts">Votes: { post.voteScore }</div>
              <div className="post-counts">Comments: { comment_count }</div>

            </div>

            <div className="new-comment">
              {this.state.showNewComment
                ?
                <div className="comment">
                  {this.state.empty_comment_error &&
                    <div className="error-found">All fields are mandatory!</div>
                  }
                  <form onSubmit={this.addComment}>
                    <label htmlFor="comment_author">Author</label>
                    <input type="text" id="comment_author" name="comment_author" size="35"/>
                    <label htmlFor="comment_content">Message</label>
                    <textarea className="comment-textarea" type="text" id="comment_content" name="comment_content" cols="60" />
                    <div className="inline-buttons">
                      <button type="submit">Add</button>
                      <button onClick={event => this.showComment()}>Cancel</button>
                    </div>
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
      )
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
  addComment
})(PostView)
