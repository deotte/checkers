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
  initialBoard.push(spot);
}

const state = () => ({
  availableMoves: [],
  board: initialBoard,
  directionCounter: [],
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

    if (context.state.currentTeam === 1) {
      context.commit('changeCurrentTeam', 2)
    } else if (context.state.currentTeam === 2) {
      context.commit('changeCurrentTeam', 1)
    }
  }
}

const mutations = {
  addAvailableMove(state, payload) {
    state.availableMoves.push(payload);
  },
  changeCurrentTeam(state, team) {
    state.team = team;
  },
  clearAvailableMoves(state) {
    state.availableMoves = [];
  },
  setDirectionCounter(state, payload) {
    state.directionCounter = payload;
  },
  setSelectedSpot(state, spot) {
    state.selectedSpot = spot;
  }
}

export default {
  state,
  actions,
  mutations
}