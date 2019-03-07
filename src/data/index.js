//Each number represents a pixel and in this case the pixel is 16X16 as an image//
import React from 'react';

export const tiles = [
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 1, 4, 1, 4, 1, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 1, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 2, 2, 3, 7, 4, 7, 3, 2, 2, 0, 0, 0, 0,
   0, 0, 0, 2, 2, 3, 3, 9, 3, 3, 2, 2, 0, 0, 0, 0,
   0, 0, 0, 0, 7, 7, 3, 3, 3, 7, 7, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 9, 3, 9, 3, 9, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 6, 8, 3, 3, 3, 8, 6, 0, 0, 0, 0, 0,
   0, 0, 0, 6, 5, 8, 6, 0, 6, 8, 5, 6, 0, 0, 0, 0,
   0, 0, 0, 6, 5, 5, 6, 0, 6, 5, 5, 6, 0, 0, 0, 0,
   0, 0, 0, 0, 6, 6, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

/*This code is getting the Player class from features/player/player.js which is
 linked to data/index.js and that's where the 16X16 pixel array lies which consists
 of numbers ranging between 0 and 9 to display different colors of each pixel in
 that 16X16 square. That's basically how this game will work.*/

let pixelsDrawn = false;

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

function MapTile(tile) {
  return <div className = {`tile ${getTile(tile)}`}>{tile}</div>
}

export function drawPixels() {
  let tile;
  for(var pixel = 0; pixel<tiles.length; pixel++) {
    tile = tiles[pixel];
  }
  return <MapTile tile={tile} />
}
