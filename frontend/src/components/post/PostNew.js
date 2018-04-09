import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import * as helpers from '../../utils/helpers';
import { fetchCategories } from '../../actions/categories';
import { addPost } from '../../actions/posts';
import { connect } from 'react-redux';

class PostNew extends Component {
  static propTypes = {
    categories: PropTypes.array
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
    const { history, categories } = this.props
    return (
      <div className="container">
        <div className="post-container">
          <h3 className="post-title">Add new post:</h3>

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
            <label htmlFor="content">Test</label>
            <textarea type="text" id="content" rows="4" cols="60" />
            <button type="submit">Add post</button>
          </form>

          <button onClick={event => history.goBack()}>Go back</button>
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
  fetchCategories,
  addPost
})(PostNew)
