import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchMovie, fetchMovies } from '../actions';

class SearchForm extends React.Component {
  handleChange = e => {
    const { searchMovie } = this.props;
    const { value } = e.target;
    searchMovie(value);
  }

  handleSubmit = e => {
    const { fetchMovies, text } = this.props;
    e.preventDefault();
    fetchMovies(text);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <form onSubmit={this.handleSubmit}>
            <div className="col-auto">
              <input
                type="text"
                onChange={this.handleChange}
                className="form-control mb-2"
                placeholder="Type in movie to search"
                required
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  searchMovie: PropTypes.func,
  fetchMovies: PropTypes.func,
  text: PropTypes.string,
};

SearchForm.defaultProps = {
  searchMovie: () => {},
  fetchMovies: () => {},
  text: '',
};

const mapStateToProps = state => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, { searchMovie, fetchMovies })(SearchForm);
