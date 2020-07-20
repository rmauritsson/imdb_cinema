import React from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/searchActions';

class SearchForm extends React.Component {
  handleChange = e => {
    this.props.searchMovie(e.target.value);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <form>
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

const mapStateToProps = state => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, { searchMovie })(SearchForm);
