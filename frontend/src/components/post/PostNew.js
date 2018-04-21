import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../../utils/helpers';
//import { fetchCategories } from '../../actions/categories';
import { addPost } from '../../actions/posts';
import { connect } from 'react-redux';

class PostNew extends Component {
  static propTypes = {
    categories: PropTypes.array,
  }

  state = {
    error_found: false
  }

  submitPost = (event) => {
    event.preventDefault();
    const _ = event.target
    if(_.title.value === '' || _.content.value === '' || _.author.value === ''
        || _.title.value.trim() === '' || _.content.value.trim() === ''
          || _.author.value.trim() === '') {
      this.setState({ error_found: true });
      return
    }
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
    const { history, categories } = this.props
    return (
      <div className="container">
        <div className="post-container">
          <h3 className="post-title">Add new post:</h3>

          {this.state.error_found &&
            <div className="error-found">All fields are mandatory!</div>
          }

          <form onSubmit={this.submitPost}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" size="35"/>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" size="35"/>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" className="field-select">
              {categories && categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
            <label htmlFor="content">Content</label>
            <textarea className="post-textarea" type="text" id="content" cols="60" />
            <div className="inline-buttons">
              <button type="submit">Add post</button>
              <button onClick={event => history.goBack()}>Go back</button>
            </div>
          </form>


        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

export default connect(mapStateToProps, {
  addPost
})(PostNew)
