import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Movie from '../components/Movie';

const MoviesContainer = ({ movies }) => {
  let content = '';
  content = movies.Response === 'True' ? movies.Search.map(movie => (
    <Movie key={uuid()} movie={movie} />)) : null;
  return <div className="row">{content}</div>;
};

MoviesContainer.propTypes = {
  movies: PropTypes.objectOf(PropTypes.array),
};

MoviesContainer.defaultProps = {
  movies: [],
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
