import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as helpers from '../../utils/helpers';

class PostItem extends Component {
  static propTypes = {
    post: PropTypes.object
  }

  render() {
    const { post } = this.props

    return (
        <div className="post-container">

          <h3 className="post-title"><Link to={`/${post.category}/${post.id}`}>{ post.title }</Link></h3>

          <p className="post-details">
            Posted by <span className="bold">{ post.author }</span> in <span className="bold">{ helpers.capitalize(post.category) }</span> on <span className="bold">{ helpers.printDate(post.timestamp) }</span>
          </p>

          <p className="post-content">{ post.body }</p>
          <div className="post-counts">Votes: { post.voteScore }</div>
          <div className="post-counts">Comments: { post.commentCount }</div>

          <Link className="read-post" to={`/${post.category}/${post.id}`}>
            Read post
          </Link>
        </div>
    );
  }
}

export default PostItem
