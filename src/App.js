import React, { Component } from 'react';
import logo from './images/ico.png';
import './App.css';
import './fonts/slkscr.ttf'
import {tiles} from './data/index'
import './features/logo/index.css';
import Player from './features/player/player';

/*This code is getting the Player class from features/player/player.js which is
 linked to data/index.js and that's where the 16X16 pixel array lies which consists
 of numbers ranging between 0 and 9 to display different colors of each pixel in
 that 16X16 square. That's basically how this game will work.*/

let  player = Player;

/*This gets the tile numbers from data/index.js and displays each one as a
className such as default, or hair. default is transparent.*/

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
        </header>
      </div>
    );
  }
}

export default App;
