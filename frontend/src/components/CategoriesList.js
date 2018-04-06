import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/categories';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers';

class CategoriesList extends Component {
  static propTypes = {
    categories: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props

    return (
        <div>
          <Link key={'all'} to={`/`}>All </Link>
          {categories && categories.map(category => (
            <Link key={category.name} to={`/${category.path}`}>{capitalize(category.name)} </Link>
          ))}
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
  fetchCategories
})(CategoriesList)
