import React from 'react';
import { connect } from 'react-redux';
import Movie from '../components/Movie';

class MoviesContainer extends React.Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
