import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/helpers';

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
        <div className="post-container">
          <h3><Link to={`/${post.category}/${post.id}`}>{ post.title }</Link></h3>
          <p>
            Posted by <span className="bold">{ post.author }</span> in <span className="bold">{ capitalize(post.category) }</span> on <span className="bold">{ post.timestamp }</span>
          </p>
          <p className="post-content">{ post.body }</p>
          <p>Vote score: { post.voteScore }</p>
          <p>Comment count: { post.commentCount }</p>
          <button className="details">Read post</button>
        </div>
    );
  }
}

export default PostItem
