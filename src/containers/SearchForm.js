import React from 'react';

const SearchForm = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      <form>
        <div className="">
          <div className="col-auto">
            <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Type in movie to search" required />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default SearchForm;
