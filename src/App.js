import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import MovieInfo from './containers/MovieInfo';

import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" component={Wrapper} />
        <Route path="/movie/:id" component={MovieInfo} />
      </div>
    </Router>
  </Provider>
);

export default App;
