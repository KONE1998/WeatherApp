import './App.css';
import React, { Component } from 'react';

import Simple from './Simple.js';
import Weather from './Weather.js';
import PostForm from './Comp/PostForm.js';
import IndexPage from './Weather2.js';
import Weatherr from './Weather/Weather.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Weatherr />
      </div>
    )
  }
}

export default App;
