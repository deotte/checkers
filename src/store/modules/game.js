/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */

const state = () => ({
  availableMoves: [],
  board: [],
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
    context.commit('removeCountersFromSpots');
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
  removeCountersFromSpots(state) {
    state.board.filter(spot => spot.counter !== null).forEach(spot => {
      spot.counter = null;
    });
  },
  setInitialBoard(state, board) {
    state.board = board;
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