import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import SearchForm from '../containers/SearchForm';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link to="/">
        <img src={logo} className="navbar-brand App-logo" alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
        <SearchForm />
      </div>
    </div>
  </nav>
);

export default Navbar;
