<template>
  <div class="board-wrapper" v-if="board.length > 0">
    <div class="spot"
        :class="availableMovesClass(spot)"
         v-for="spot in board"
         :id="spot.position"
         :key="spot.position">
        <div class="piece"
            :class="'team' + spot.piece.team"
             @click="showAvailableSpots(spot)"
             :id="'piece-' + spot.position"
             v-if="spot.piece">
          {{ spot.position }}
        </div>
        <div class="empty"
             @click="moveToSpot(spot)"
             v-else>
          {{ spot.position }}
        </div>
    </div>
  </div>
</template>
<script>
import { moveToNewSpot, spotIsClicked } from '../../utilities/checkers.js';
import { initialBoard } from '../../utilities/initialBoard.js';

export default {
  name: 'Board',
  computed: {
    board() {
      return this.$store.state.game.board;
    }
  },
  created() {
    this.$store.commit('setInitialBoard', initialBoard);
  },
  methods: {
    moveToSpot(spot) {
      moveToNewSpot(spot);
    },
    showAvailableSpots(spot) {
      spotIsClicked(spot);
    },
    availableMovesClass(spot) {
      if (this.$store.state.game.availableMoves.includes(spot.position)) {
        return `availableMove${this.$store.state.game.team}`;
      }
    }
  }
}
</script>
<style>
  .board-wrapper {
    width: 620px;
    height: 620px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .spot {
    width: 75px;
    height: 75px;
    margin: 0;
    background-color: rgba(0,0,0,.025);
    border: 1px solid #cecece;
    box-sizing: border-box;
    display: flex;
  }

  .piece {
    width: 75%;
    height: 75%;
    margin: auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .empty {
    width: 75%;
    height: 75%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .team1 {
    background-color: green;
  }

  .team2 {
    background-color: red;
  }

  .availableMove1 {
    border: 1px solid green;
  }

  .availableMove2 {
    border: 1px solid red;
  }
</style>