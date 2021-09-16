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
    if (store.state.game.availableMoves.length > 0) {
      store.commit('clearAvailableMoves');  
    }

    store.commit('setSelectedSpot', spot);

    determineCounter(spot.piece);
    calculateMoves(spot.piece);
  }
}

function moveToNewSpot(spot) {
  store.dispatch('moveToSelectedSpot', spot);
}

function kingPiece(piece) {
  return piece.king === true;
}

export { moveToNewSpot, spotIsClicked, kingPiece };