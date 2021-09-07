/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import store from "../store";
import { determineCounter } from "./directionCounter";
import { calculateMoves } from "./availableMoves";

function spotIsClicked(piece) {
  let currentTeam = store.state.game.team;

  if (piece.team !== currentTeam) {
    return;
  } else {
    store.commit('setSpotSelected', true); 
    // Maybe we don't need this? maybe just check state.availableMoves in the next function

    determineCounter(piece);
    calculateMoves(piece);
  }
}

function movePiece(piece, position) {

}

function kingPiece(piece) {
  return piece.king === true;
}

export { spotIsClicked, kingPiece };