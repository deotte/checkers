/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import store from "../store";
import { OUTER_SPOTS } from "./directionCounter";

function calculateMoves(originalSpot) {
  let availableMoves = [];
  let counter = store.state.game.directionCounter;
  let currentBoard = store.state.game.board;
  let currentTeam = store.state.game.team;

  counter.forEach((count) => {
    let position = originalSpot.position;

    while (position < 64 && position > 1) {
      let nextSpotPosition = position + count;

      if (nextSpotPosition > 64 || nextSpotPosition < 1) { 
        break;
      }
              
      let currentIteratedSpot = currentBoard.find(el => el.position === position); // can also consider this "spot before"

      if (OUTER_SPOTS.includes(nextSpotPosition)) {
        let nextSpot = currentBoard.find(el => el.position === nextSpotPosition);

        if (nextSpot.empty) {
          if (currentIteratedSpot.piece.team !== currentTeam) {
            addCounterToSpots([currentIteratedSpot, nextSpot], count);
            addAvailableMove(nextSpotPosition);
            addEnemySpot(currentIteratedSpot);
          } else if (currentIteratedSpot === originalSpot) {
            addCounterToSpots([currentIteratedSpot, nextSpot], count);
            addAvailableMove(nextSpotPosition);
          }
        }

        break;
      } else {
        let nextSpot = currentBoard.find(el => el.position === nextSpotPosition);

        if (nextSpot.empty) {
          if (currentIteratedSpot.piece.team !== currentTeam) {
            addCounterToSpots([currentIteratedSpot, nextSpot], count);
            addAvailableMove(nextSpotPosition);
            addEnemySpot(currentIteratedSpot);
          } else if (currentIteratedSpot === originalSpot) {
            addCounterToSpots([currentIteratedSpot, nextSpot], count);
            addAvailableMove(nextSpotPosition);
          }
  
          break;
        } else if (!nextSpot.empty && nextSpot.piece.team === currentTeam) {
          break;
        }

        position += count;
      }
    }
  });
}

// Add count as a key to available moves AND enemy spots
// So that later, we can match the path to the enemy spot
function addCounterToSpots(spots, counter) {
  spots.forEach(spot => {
    store.commit('addCounterToSpot', {spot, counter});
  });
}

function addAvailableMove(position) {
  store.commit('addAvailableMove', position);
}

function addEnemySpot(spot) {
  store.commit('addEnemySpot', spot);
}

export { calculateMoves };