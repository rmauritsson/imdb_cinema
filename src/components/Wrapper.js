import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchForm from '../containers/SearchForm';
import MoviesContainer from '../containers/MoviesContainer';
import Spinner from './Spinner';

const Wrapper = ({ loading }) => (
  <div className="container">
    <SearchForm />
    { loading ? <Spinner /> : <MoviesContainer /> }
  </div>
);

Wrapper.propTypes = {
  loading: PropTypes.bool,
};

Wrapper.defaultProps = {
  loading: false,
};

const mapStateToProps = state => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Wrapper);
