import React, { Component } from 'react';

import Header from './Header';
import Board from './Board';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className='app-container'>
        <Header/>
        <Board/>
      </div>
    );
  }
}

export default App;
