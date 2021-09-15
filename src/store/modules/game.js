let initialBoard = [];

const TEAM_ONE_SPOTS = [2, 4, 6, 8, 9, 11, 13, 15, 18, 20, 22, 24];
const TEAM_TWO_SPOTS = [41, 43, 45, 47, 50, 52, 54, 56, 57, 59, 61, 63];

// Set initial board up
for (let i = 1; i <= 64; i++) {
  let spot = {};

  if (TEAM_ONE_SPOTS.includes(i)) {
    spot.empty = false;
    spot.piece = {
      position: i,
      king: false,
      direction: 'forward',
      team: 1
    }
  } else if (TEAM_TWO_SPOTS.includes(i)) {
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
  availableMoves: [],
  board: initialBoard,
  directionCounter: [],
  selectedPiece: {},
  team: 1
});

const mutations = {
  addAvailableMove(state, payload) {
    state.availableMoves.push(payload);
  },
  clearAvailableMoves(state) {
    state.availableMoves = [];
  },
  // moveSelectedPiece(state, spot) {

  // },
  setDirectionCounter(state, payload) {
    state.directionCounter = payload;
  },
  setSelectedPiece(state, piece) {
    state.selectedPiece = piece;
  }
}

export default {
  state,
  mutations
}