<template>
  <div class="board-wrapper">
    <div class="spot"
         v-for="spot in board"
         :id="spot.position"
         :key="spot.position">
        <div class="piece"
             @click="showAvailableSpots(spot)"
             :id="'piece-' + spot.position"
             v-if="spot.piece">
        </div>
        <div class="empty"
             @click="moveToSpot(spot)"
             v-else>
        </div>
    </div>
  </div>
</template>
<script>
import { moveToNewSpot, spotIsClicked } from '../../utilities/checkers.js';

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
    moveToSpot(spot) {
      moveToNewSpot(spot);
    },
    showAvailableSpots(spot) {
      spotIsClicked(spot);
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