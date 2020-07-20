import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Navbar />
      <Wrapper />
    </div>
  </Provider>
);

export default App;
