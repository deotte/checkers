/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import store from "../store";

function calculateMoves(piece) {
  let availableMoves = [];
  let counter = store.state.game.directionCounter;
  let currentTeam = store.state.game.team;
  let currentBoard = store.state.game.board;

  /* 
    For every direction in counter array:
      - Take current position
      - Add count to it
  */

  counter.forEach((count, index) => {
    let position = piece.position;

    while (position < 64 || position > 1) {
      let nextPosition = position + count;

      if (nextPosition > 64 || nextPosition < 1) {
        break;
      }

      position += count;
      console.log(position);
    }
  });
}

export { calculateMoves };