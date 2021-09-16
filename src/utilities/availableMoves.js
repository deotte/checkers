/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import store from "../store";
import { LEFT_SPOTS, RIGHT_SPOTS, TOP_SPOTS, BOTTOM_SPOTS, OUTER_SPOTS } from "./directionCounter";

function calculateMoves(piece) {
  let availableMoves = [];
  let counter = store.state.game.directionCounter;
  let selectedPiece = store.state.game.selectedSpot.piece;

  counter.forEach((count, index) => {
    let position = piece.position;

    while (position < 64 && position > 1) {
      // If you start at an outside piece, no need to change direction  
      if (OUTER_SPOTS.includes(position) && position !== selectedPiece.position) {
        changeDirection(position, count);
        break;
      }

      if (spotIsValid(position, count)) {
        addSpotToAvailableMoves(position);
      } else {
        break;
      }

      position += count;
    }
  });
}

// Welcome to hell
function spotIsValid(position, count) {
  let currentBoard = store.state.game.board;
  let currentTeam = store.state.game.team;
  let selectedPiece = store.state.game.selectedSpot.piece;
  let nextSpot = currentBoard.find(spot => spot.position === position + count);
  
  // I'm not proud of this
  if (nextSpot.empty) {
    if (selectedPiece.position === position) {
      addPreLoadedSpot(nextSpot);
      return false;
    } else {
      let spotBefore = currentBoard.find(spot => spot.position === position);

      return !spotBefore.empty && spotBefore.team !== currentTeam;    
    }
  } else {
    return false;
  }
}

function addSpotToAvailableMoves(position) {
  let currentBoard = store.state.game.board;
  let spot = currentBoard.find(spot => spot.position === position);
  store.commit('addAvailableMove', spot);
}

function addPreLoadedSpot(spot) {
  store.commit('addAvailableMove', spot);
}

/*
  If you reach an outside piece, and that outside piece isn't the end (like 8):
  All you need to do is change directions to the other count.
  So if you're on position 20, your count starts out as [7, 9]. 
  You count until 41. 41 isn't the end of the line.
  Once on 41, you change to the second count to go right, [9], which takes you to 50 and 59.
*/

function changeDirection(position, count) {
  // If you're on a top or bottom piece, like 8, you're done. Nowhere else to go
  if (TOP_SPOTS.includes(position) || BOTTOM_SPOTS.includes(position)) {
    return;
  }

  let newCount = determineNewCount(count);

  while (position < 64 && position > 1) {
    if (spotIsValid(position, count)) {
      addSpotToAvailableMoves(position);
    }

    position += newCount;
  }
}

function determineNewCount(count) {
  switch (count) {
    case 7:
      return 9;
    case 9:
      return 7;
    case -7:
      return -9;
    case -9:
      return -7;
  }
}

export { calculateMoves };