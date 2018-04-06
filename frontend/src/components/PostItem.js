import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { capitalize } from '../utils/helpers';

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
        <div className="post-container">
          <h3>{ post.title }</h3>
          <p>
            Posted by <span class="bold">{ post.author }</span> in <span class="bold">{ capitalize(post.category) }</span> on <span class="bold">{ post.timestamp }</span>
          </p>
          <p>{ post.body }</p>
          <p>Vote score: { post.voteScore }</p>
          <p>Comment count: { post.commentCount }</p>
        </div>
    );
  }
}

export default PostItem
