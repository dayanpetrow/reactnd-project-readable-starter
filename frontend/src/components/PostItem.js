import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import { capitalize } from '../utils/helpers';

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
        <div className="container">
          {post && (
            <p key={post.title}>{ post.title }</p>
          )}
        </div>
    );
  }
}

export default PostItem
