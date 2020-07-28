import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchMovie, fetchMovies, setLoading } from '../actions';

class SearchForm extends React.Component {
  handleChange = e => {
    const { searchMovie } = this.props;
    const { value } = e.target;
    searchMovie(value);
  }

  handleSubmit = e => {
    const { fetchMovies, text, setLoading } = this.props;
    e.preventDefault();
    fetchMovies(text);
    setLoading();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
        <input onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Type movie/series to Search" aria-label="Search" />
        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  searchMovie: PropTypes.func,
  fetchMovies: PropTypes.func,
  text: PropTypes.string,
  setLoading: PropTypes.bool,
};

SearchForm.defaultProps = {
  searchMovie: () => {},
  fetchMovies: () => {},
  text: '',
  setLoading: false,
};

const mapStateToProps = state => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, { searchMovie, fetchMovies, setLoading })(SearchForm);
