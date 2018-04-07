import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import { capitalize } from '../utils/helpers';

class Comment extends Component {
  render() {
    const { comment } = this.props

    return (
        <div className="comment">
          <p>Posted by { comment.author } on { comment.timestamp }</p>
          <p>{ comment.body }</p>
        </div>
    );
  }
}

export default Comment
