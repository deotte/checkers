/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
let initialBoard = [];

const TEAM_ONE_SPOTS = [2, 4, 6, 8, 9, 11, 13, 15, 18, 20, 22, 24];
const TEAM_TWO_SPOTS = [41, 43, 45, 47, 50, 52, 54, 56, 57, 59, 61, 63];

// Set initial board up
for (let i = 1; i <= 64; i++) {
  let spot = {};

  if (TEAM_ONE_SPOTS.includes(i)) {
    spot.empty = false;
    spot.piece = {
      id: i,
      king: false,
      direction: 'forward',
      team: 1
    }
  } else if (TEAM_TWO_SPOTS.includes(i)) {
    spot.empty = false;
    spot.piece = {
      id: i,
      king: false,
      direction: 'backward',
      team: 2
    }
  } else {
    spot.empty = true;
    spot.piece = null;
  }

  spot.position = i;
  spot.counter = null;
  initialBoard.push(spot);
}

const state = () => ({
  availableMoves: [],
  board: initialBoard,
  directionCounter: [],
  enemySpots: [],
  selectedSpot: {},
  team: 1
});

const actions = {
  moveToSelectedSpot(context, spot) {
    let currentBoard = context.state.board;
    let newSpot = currentBoard.find(element => element.position === spot.position);
    let oldSpot = context.state.selectedSpot;

    newSpot.piece = oldSpot.piece;
    newSpot.empty = false;

    oldSpot.empty = true;
    oldSpot.piece = null;

    context.commit('changeCurrentTeam');
  }
}

const mutations = {
  addAvailableMove(state, position) {
    state.availableMoves.push(position);
  },
  addEnemySpot(state, position) {
    state.enemySpots.push(position);
  },
  addCounterToSpot(state, { spot, counter }) {
    spot.counter = counter;
  },
  changeCurrentTeam(state) {
    if (state.team === 1) {
      state.team = 2;
    } else if (state.team === 2) {
      state.team = 1;
    }
  },
  clearAvailableMoves(state) {
    state.availableMoves = [];
  },
  clearEnemySpots(state) {
    state.enemySpots = [];
  },
  removeEnemyPieceFromBoard(state, spot) {
    spot.piece = null;
    spot.empty = true;
  },
  setDirectionCounter(state, payload) {
    state.directionCounter = payload;
  },
  setSelectedSpot(state, spot) {
    state.selectedSpot = spot;
  },
  setEnemyPieceSpot(state, spot) {
    state.spotOfEnemyPiece = spot;
  }
}

export default {
  state,
  actions,
  mutations
}