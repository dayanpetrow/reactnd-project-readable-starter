import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../../utils/helpers';
import { fetchPost } from '../../actions/posts';
import { editPost } from '../../actions/posts';
import { connect } from 'react-redux';

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.state = {
      body: '',
      title: '',
      error_found: false
    }
  }

  static propTypes = {
    post: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  componentWillReceiveProps(data) {
    this.setState({ title: data.post.title });
    this.setState({ body: data.post.body });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ body: event.target.value });
  }

  editPost = (event) => {
    event.preventDefault();
    if(this.state.title === '' || this.state.body === '') {
      this.setState({ error_found: true });
      return
    }
    const new_values = {
      title: this.state.title,
      body: this.state.body,
    }
    this.props.editPost(this.props.post.id, new_values);
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`)
  }

  render() {
    const { post, history } = this.props
    return (
      <div className="container">
        <div className="post-container">
          <h3 className="post-title">Edit post:</h3>


          <p>Post ID: { post.id }</p>
          <p>Category: { helpers.capitalize(post.category) }</p>

          {this.state.error_found &&
            <div className="error-found">All fields are mandatory!</div>
          }
          
          <form onSubmit={this.editPost}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleTitleChange} name="title" size="35" value={this.state.title} />
            <label htmlFor="content">Content</label>
            <textarea className="post-textarea" type="text" id="body" name="body" onChange={this.handleContentChange} rows="4" cols="60" value={this.state.body} />
            <div className="inline-buttons">
              <button type="submit">Update post</button>
              <button onClick={event => history.push(`/posts/${post.id}`)}>Cancel</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return {
    post: post
  }
}

export default connect(mapStateToProps, {
  fetchPost,
  editPost
})(PostEdit)
