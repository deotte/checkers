// eslint-disable-next-line no-unused-vars
import store from "../../store";

/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const LEFT_SPOTS = [1, 9, 17, 25, 33, 41, 49, 57];
const RIGHT_SPOTS = [8, 16, 24, 32, 40, 48, 56, 64];
const OUTER_SPOTS = [1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 64, 9, 17, 25, 33, 41, 49, 57, 58, 59, 60, 61, 62, 63];

function spotIsClicked(piece) {
  let currentTeam = store.state.game.team;

  if (piece.team !== currentTeam) {
    return;
  } else {
    store.commit('setSpotSelected', true);
    // Update state - first spot has been clicked
    // Available moves need to be shown
    // 
  }
}

function calculateMoves() {

}

function movePiece(piece, position) {

}


// function availableMoves(piece, spots, currentTeam) {
//   let availableSpots = [];

//   if (kingPiece(piece.king)) {
//     console.log('Hello');
//   } else {
//     let counter = counter(piece.position, piece.direction);

//     for (let i = piece.position; i + counter; i <= 64) {
//       if (OUTER_SPOTS.includes(i)) {
//         break;
//       }

//       let currentSpot = spots.find(spot => spot.position === i);

//       if (currentSpot.piece === null) {
//         let spotBefore = spots.find(spot => spot.position === i - counter);

//         if (spotBefore.team !== currentTeam) {
//           availableSpots.push(currentSpot);
//         } else {
//           continue;
//         }
//       } else {
//         continue;
//       }
//     }
//   }

//   return availableSpots;
// }

function kingPiece(value) {
  return value === true;
}

function counter(position, direction) {
  // Four directions
  // Backward: Up, right / Up, left
  // Forward: Down, right / Down, left

  if (LEFT_SPOTS.includes(position)) {
    if (direction === 'forward') {
      return 9;
    } else if (direction === 'backward') {
      return -7;
    }
  } else if (RIGHT_SPOTS.includes(position)) {
    if (direction === 'forward') {
      return 7;
    } else if (direction === 'backward') {
      return -9;
    }
  }
}