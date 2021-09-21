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
    determineCounter(spot);
    calculateMoves(spot);
  }
}

function moveToNewSpot(spot) {
  let game = store.state.game;

  if (game.availableMoves.includes(spot.position)) {
    store.commit('clearAvailableMoves');

    if (Object.keys(game.spotOfEnemyPiece).length) {
      store.commit('removePieceFromBoard', game.spotOfEnemyPiece);
    }

    store.dispatch('moveToSelectedSpot', spot);
  } else {
    return;
  }
}

export { moveToNewSpot, spotIsClicked };