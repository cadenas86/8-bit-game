import React, { Component } from 'react';
import logo from './images/ico.png';
import './App.css';
import './fonts/slkscr.ttf'
import {tiles, drawPixels} from './data/index'
import Player from './features/player/player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p className="title">8-Bit</p>
       <div className = 'bh'>
          <drawPixels className="App-logo" />
        </div>
          <p>
             Game
          </p>
        </header>
      </div>
    );
  }
}

export default App;
