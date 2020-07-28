import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchMovie, setLoading } from '../actions';

class MovieInfo extends React.Component {
  componentDidMount() {
    const { fetchMovie, match, setLoading } = this.props;
    fetchMovie(match.params.id);
    setLoading();
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body bg-dark">
            <img className="thumbnail" src={movie.Poster} alt="Movie Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{ movie.Title }</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre: </strong>
                { movie.Genre }
              </li>
              <li className="list-group-item">
                <strong>Realeased On: </strong>
                { movie.Released }
              </li>
              <li className="list-group-item">
                <strong>Rated: </strong>
                { movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating: </strong>
                { movie.imdbRating }
              </li>
              <li className="list-group-item">
                <strong>Director: </strong>
                { movie.Director }
              </li>
              <li className="list-group-item">
                <strong>Writer(s): </strong>
                { movie.Writer }
              </li>
              <li className="list-group-item">
                <strong>Actors: </strong>
                { movie.Actors }
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-light my-5 text-dark">
            <div className="col-md-12">
              <h3> Movie Synopsis </h3>
              { movie.Plot }
              <hr />
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-default"
              >
                View on IMDB
              </a>
              <Link
                to="/"
                className="btn btn-default text-dark"
              >
                Go back to Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieInfo.propTypes = {
  movie: PropTypes.objectOf(PropTypes.array).isRequired,
  fetchMovie: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  params: PropTypes.string,
  id: PropTypes.string,
  match: PropTypes.string,
};

MovieInfo.defaultProps = {
  params: '',
  id: '',
  match: '',
};

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(MovieInfo);
