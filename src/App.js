import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import Wrapper from './containers/Wrapper';

const App = () => (
  <div className="App">
    <Navbar />
    <Wrapper />
  </div>
);

export default App;
