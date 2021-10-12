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
    clearMovesAndEnemySpots();
    store.commit('setSelectedSpot', spot);
    determineCounter(spot);
    calculateMoves(spot);
  }
}

function moveToNewSpot(spot) {
  let game = store.state.game;

  if (game.availableMoves.includes(spot.position)) {
    store.commit('clearAvailableMoves');
    removeEnemySpot(spot);
    store.dispatch('moveToSelectedSpot', spot);
  } else {
    return;
  }
}

function clearMovesAndEnemySpots() {
  if (store.state.game.availableMoves.length > 0) {
    store.commit('clearAvailableMoves');
  }
  
  if (store.state.game.enemySpots.length > 0) {
    store.commit('clearEnemySpots');
  }
}

function removeEnemySpot(newSpot) {
  if (store.state.game.enemySpots.length > 0) {
    let counter = newSpot.counter;
    let enemySpots = store.state.game.enemySpots;
    let enemySpotToRemove = enemySpots.find(spot => spot.counter === counter);

    if (typeof enemySpotToRemove !== 'undefined') {
      store.commit('removeEnemyPieceFromBoard', enemySpotToRemove);
    }
  }
}

export { moveToNewSpot, spotIsClicked };