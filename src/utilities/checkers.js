/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import store from "../store";
import { determineCounter } from "./directionCounter";

function spotIsClicked(piece) {
  let currentTeam = store.state.game.team;

  if (piece.team !== currentTeam) {
    return;
  } else {
    store.commit('setSpotSelected', true); 
    // Maybe we don't need this? maybe just check state.availableMoves in the next function

    determineCounter(piece);
    console.log(store.state.game.directionCounter);
    // calculateMoves(piece, currentTeam);

    // let availableMoves = calculateMoves(piece, currentTeam);
    // store.commit('setAvailableMoves', availableMoves);

    // console.log('hello');
    // console.log(store.state.game.availableMoves);
    // console.log(store.state.game.spotSelected);
  }
}

// function calculateMoves(piece, currentTeam) {
//   console.log('hello');
//   // let availableMoves = [];
//   // let counter = store.state.game.directionCounter;
//   // let currentBoard = store.state.game.board;
//   // let position = piece.position;

//   // console.log(position);
//   /*
//     For every direction in counter array:
//     - Add / substract from current spot to get to next spot
//     - Check if iterated spot is occupied
//     - Skip if it is
//     - If not, check if the spot before it is occupied by an enemy piece
//     - If it is, add it to the list
//   */

//   // counter.forEach(count => {
//   //   for (let i = piece; i + count; (i <= 64 || i >= 1)) {
//   //     console.log(i.position);
//   //   }
//   // });
// }


// for (const count of counter) {
//   let nextSpot = currentBoard.find(spot => spot.position === position + count);

//   // > 64 and < 1 would be going outside the board
//   if (nextSpot > 64 || nextSpot < 1 || (!nextSpot.empty && nextSpot.piece.team === currentTeam)) {
//     break;
//   }

//   if (!nextSpot.empty && nextSpot.piece.team !== currentTeam && piece.) {

//   }
// }

// counter.reduce(() => {

// });

// return availableMoves;

function movePiece(piece, position) {

}

function kingPiece(piece) {
  return piece.king === true;
}

export { spotIsClicked, kingPiece };