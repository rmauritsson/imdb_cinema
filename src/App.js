import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper />
      </div>
    </Router>
  </Provider>
);

export default App;
