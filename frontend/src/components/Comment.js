import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../utils/helpers';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object
  }

  render() {
    const { comment } = this.props

    return (
        <div className="comment">
          <p className="comment-details">Posted by <span className="bold">{ comment.author }</span> on <span className="bold">{ helpers.printDate(comment.timestamp) }</span></p>
          <p className="comment-content">{ comment.body }</p>
        </div>
    );
  }
}

export default Comment
