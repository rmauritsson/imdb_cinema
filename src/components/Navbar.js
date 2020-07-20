import React from 'react';
import logo from '../logo.png';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light bg-light flex-column">
    <img src={logo} className="navbar-brand mx-auto App-logo" alt="logo" />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  </nav>
);

export default Navbar;
