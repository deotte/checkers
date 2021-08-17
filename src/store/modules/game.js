let initialBoard = [];

const teamOneSpots = [2, 4, 6, 8, 9, 11, 13, 15, 18, 20, 22, 24];
const teamTwoSpots = [41, 43, 45, 47, 50, 52, 54, 56, 57, 59, 61, 63];

for (let i = 1; i <= 64; i++) {
  let spot = {};

  if (teamOneSpots.includes(i)) {
    spot.empty = false;
    spot.piece = {
      position: i,
      king: false,
      direction: 'forward',
      team: 1
    }
  } else if (teamTwoSpots.includes(i)) {
    spot.empty = false;
    spot.piece = {
      position: i,
      king: false,
      direction: 'backward',
      team: 2
    }
  } else {
    spot.empty = true;
  }

  spot.position = i;
  initialBoard.push(spot);
}

const state = () => ({
  message: 'Hello',
  board: initialBoard,
});

export default {
  state
}