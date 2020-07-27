import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => (
  <div className="col-md-3 mb-5">
    <div className="card card-body bg-dark text-center h-100">
      <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
      <h5 className="text-light card-title">
        {movie.Title}
        -
        {movie.Year}
      </h5>
      <Link className="btn btn-primary" to={`/movie/${movie.imdbID}`}>Movie Details</Link>
    </div>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.objectOf(PropTypes.array),
};

Movie.defaultProps = {
  movie: {},
};

export default Movie;
