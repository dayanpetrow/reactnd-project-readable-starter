import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import * as helpers from '../../utils/helpers';
import { fetchPost } from '../../actions/posts';
import { addPost } from '../../actions/posts';
import { connect } from 'react-redux';

class PostEdit extends Component {
  static propTypes = {
    post: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postId)
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  submitPost = (event) => {
    event.preventDefault();
    const _ = event.target
    const post = {
      id: helpers.generateId(),
      timestamp: Date.now(),
      title: _.title.value,
      body: _.content.value,
      author: _.author.value,
      category: _.category.value
    }
    this.props.addPost(post, () => this.props.history.push(`/${post.category}/${post.id}`))
  }

  render() {
    const { post, history } = this.props

    return (
      <div className="container">
        <div className="post-container">
          <h3 className="post-title">Edit post:</h3>

          <form onSubmit={this.submitPost}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleInputChange} name="title" size="35" ref="title" value={post.title || 'undefined'} />
            <label htmlFor="content">Content</label>
            <p>{ post. title}</p>
            <textarea type="text" id="content" onChange={this.handleInputChange} rows="4" cols="60" value={post.body || 'undefined'} />
            <button type="submit">Update post</button>
          </form>

          <button onClick={event => history.push(`/posts/${post.id}`)}>Cancel</button>
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
  fetchPost
})(PostEdit)
