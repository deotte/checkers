<template>
  <div class="board-wrapper">
    <div class="spot"
         v-for="spot in board"
         :key="spot.position">
        <div class="piece"
             @click="showAvailableSpots(spot.piece)"
             v-if="spot.hasOwnProperty('piece')">
        </div>
        <div class="empty"
             v-else>
        </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { spotIsClicked } from '../../utilities/checkers.js';

export default {
  name: 'Board',
  props: {

  },
  data() {
    return {
      board: this.$store.state.game.board,
    }
  },
  methods: {
    showAvailableSpots(piece) {
      // eslint-disable-next-line no-debugger
      spotIsClicked(piece);
    }
  },
  mounted() {
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
    background-color: #74992e;
    width: 75%;
    height: 75%;
    margin: auto;
    border-radius: 50%;
  }

  .empty {
    width: 75%;
    height: 75%;
    margin: auto;
  }
</style>