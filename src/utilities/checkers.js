/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import store from "../store";
import { determineCounter } from "./directionCounter";
import { calculateMoves } from "./availableMoves";

function spotIsClicked(spot) {
  let currentTeam = store.state.game.team;

  if (spot.piece && spot.piece.team !== currentTeam) {
    return;
  } else {
    store.commit('setSelectedSpot', spot);

    determineCounter(spot.piece);
    calculateMoves(spot.piece);
  }
}

function movePiece(piece, position) {

}

function kingPiece(piece) {
  return piece.king === true;
}

export { spotIsClicked, kingPiece };