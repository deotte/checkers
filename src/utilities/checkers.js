// eslint-disable-next-line no-unused-vars
import store from "../store";

/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
const LEFT_SPOTS = [1, 9, 17, 25, 33, 41, 49, 57];
const RIGHT_SPOTS = [8, 16, 24, 32, 40, 48, 56, 64];
const OUTER_SPOTS = [1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 64, 9, 17, 25, 33, 41, 49, 57, 58, 59, 60, 61, 62, 63];

function spotIsClicked(piece) {
  let currentTeam = store.state.game.team;

  if (piece.team !== currentTeam) {
    return;
  } else {
    store.commit('setSpotSelected', true); 
    // Maybe we don't need this? maybe just check state.availableMoves in the next function

    let availableMoves = calculateMoves(piece, currentTeam);
    store.commit('setAvailableMoves', availableMoves);

    console.log('hello');
    console.log(store.state.game.availableMoves);
    console.log(store.state.game.spotSelected);
  }
}

function calculateMoves(piece, currentTeam) {
  let availableMoves = [];
  let currentBoard = store.state.game.board;

  if (kingPiece(piece)) {

  } else {
    // let counter = determineCounter(piece.position, piece.direction);

    // for (let i = piece.position; i + counter; i <= 64) {
    //   let nextSpot = currentBoard.find(spot => spot.position === i + counter);

    //   // This breaks if you start on an outer piece. Click on spot 9 for example
    //   // if (OUTER_SPOTS.includes(nextSpot)) {
    //   //   break;
    //   // }

    //   let currentSpot = currentBoard.find(spot => spot.position === i);

    //   if (currentSpot.piece === null) {
    //     let spotBefore = currentBoard.find(spot => spot.position === i - counter);

    //     if (spotBefore.team !== currentTeam) {
    //       availableMoves.push(currentSpot);
    //     } else {
    //       continue;
    //     }
    //   } else {
    //     continue;
    //   }
    // }
  }

  return availableMoves;
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

function kingPiece(piece) {
  return piece.king === true;
}

function determineCounter(position, direction) {
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

export default spotIsClicked