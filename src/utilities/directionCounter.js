/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import store from "../store";

const LEFT_SPOTS = [9, 17, 25, 33, 41, 49, 57];
const TOP_SPOTS = [1, 2, 3, 4, 5, 6, 7, 8];
const RIGHT_SPOTS = [16, 24, 32, 40, 48, 56, 64];
const BOTTOM_SPOTS = [57, 58, 59, 60, 61, 62, 63, 64];
const OUTER_SPOTS = LEFT_SPOTS + TOP_SPOTS + RIGHT_SPOTS + BOTTOM_SPOTS;

function determineCounter(spot) {
  let piece = spot.piece;
  let position = spot.position;
  let counter = [];

  if (LEFT_SPOTS.includes(position)) {
    counter = handleLeftSpot(piece);
  } else if (TOP_SPOTS.includes(position)) {
    counter = handleTopSpot(position, piece);
  } else if (RIGHT_SPOTS.includes(position)) {
    counter = handleRightSpot(piece);
  } else if (BOTTOM_SPOTS.includes(position)) {
    counter = handleBottomSpot(position, piece);
  } else {
    counter = handleRegularSpot(piece);
  }

  store.commit('setDirectionCounter', counter);
}

function handleLeftSpot(piece) {
  if (kingPiece(piece)) {
    return [-7, 9];
  } else {
    if (piece.direction === 'backward') {
      return [-7];
    } else if (piece.direction === 'forward') {
      return [9];
    }
  }
}

function handleRightSpot(piece) {
  if (kingPiece(piece)) {
    return [-9, 7];
  } else {
    if (piece.direction === 'backward') {
      return [-9];
    } else if (piece.direction === 'forward') {
      return [7];
    }
  }
}

function handleRegularSpot(piece) {
  if (kingPiece(piece)) {
    return [-7, -9, 7, 9];
  } else {
    if (piece.direction === 'backward') {
      return [-9, -7];
    } else if (piece.direction == 'forward') {
      return [7, 9];
    }
  }
}

/*
  With top and bottom spots, king piece doesn't matter here.
  Top pieces can only move forward, or down.
  Bottom pieces can only move backward, or up.
*/

function handleTopSpot(position, piece) {
  if (position === 1) {
    return [9];
  } else if (position === 8) {
    return [7];
  } else {
    return [7, 9];
  }
}

function handleBottomSpot(position, piece) {
  if (position === 57) {
    return [-7];
  } else if (position === 64) {
    return [-9];
  } else {
    return [-7, -9];
  }
}

function kingPiece(piece) {
  return piece.king === true;
}

export { determineCounter, LEFT_SPOTS, RIGHT_SPOTS, TOP_SPOTS, BOTTOM_SPOTS, OUTER_SPOTS };