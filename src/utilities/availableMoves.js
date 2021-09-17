/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import store from "../store";

function calculateMoves(spot) {
  let availableMoves = [];
  let counter = store.state.game.directionCounter;
  let currentBoard = store.state.game.board;
  let currentTeam = store.state.game.team;

  counter.forEach((count) => {
    let position = spot.position;

    while (position < 64 && position > 1) {
      let nextSpotPosition = position + count;

      if (nextSpotPosition > 64 || nextSpotPosition < 1) { 
        break;
      }

      let currentIteratedSpot = currentBoard.find(el => el.position === position);
      let nextSpot = currentBoard.find(el => el.position === nextSpotPosition);

      if (nextSpot.empty) {
        if ((currentIteratedSpot === spot) || currentIteratedSpot.team !== currentTeam) {
          store.commit('addAvailableMove', nextSpot);
          break;
        }
      } else if (!nextSpot.empty && nextSpot.team === currentTeam) {
        break;
      }

      position += count;
    }
  });
}

export { calculateMoves };