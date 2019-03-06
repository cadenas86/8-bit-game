import React, { Component } from 'react';
import logo from './images/ico.png';
import './App.css';
import './fonts/slkscr.ttf'
import {tiles} from './data/index'
import './features/logo/index.css';
import Player from './features/player/player';


let  player = Player;

function getTile(type) {
  switch(type){
    case 0:  return 'default'
    case 1:  return 'hair'
    case 2:  return 'skin'
    case 3:  return 'clothes'
    case 4:  return 'skinShade'
    case 5:  return 'boots'
    case 6:  return 'bootsShade'
    case 7:  return 'clotheShade'
    case 8: return 'bootsLight'
    case 9: return 'black'
  }
}

function MapTile(player) {
  return <div className = {`tile ${getTile(player.tile)}`}>{player.tile}</div>
}

function MapRow(player) {
  return <div className="row">
    {
      player.tiles.map(tile => <MapTile tile={tile} />)
    }
  </div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p className="title">8-Bit</p>
       <div className = 'bh'>
          <img src=  {
              player.tiles.map(row => <MapRow tiles={row} />)
            }
             className="App-logo" alt="logo" />
        </div>
          <p>
             Game
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
