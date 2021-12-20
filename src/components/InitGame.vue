<template>
  <div id="gamefield" class="col-auto init-game-mid">
    <table class="matchfield">
      <tbody>
      <template v-for="(row, index) in fields">
        <tr :key="'row' + index">
          <template v-for="(aField, index) in row.cols">
            <td v-if="aField.isSet" class="char-pic field" :key="'aField' + index">
              <div v-if="aField.colour && playerListBufferBlue !== 0 && currentPlayer === player">
                <img class="fig-cards blue" type="image" :src="'http://localhost:9000/' + aField.figSrc" alt=""/>
              </div>
              <div v-else-if="aField.colour && playerListBufferBlue !== 0 && currentPlayer !== player">
                <img class="fig-cards" type="image" :src="'http://localhost:9000/' + aField.blueSrc" alt="blue"/>
              </div>
              <div v-else-if="!aField.colour && playerListBufferRed !== 0 && currentPlayer === player">
                <img class="fig-cards red" type="image" :src="'http://localhost:9000/' + aField.figSrc" alt=""/>
              </div>
              <div v-else-if="!aField.colour && playerListBufferRed !== 0 && currentPlayer !== player">
                <img class="fig-cards" type="image" :src="'http://localhost:9000/' + aField.redSrc" alt="red"/>
              </div>
              <div v-else-if="playerListBufferBlue === 0 && aField.colour">
                <img class="fig-cards" type="image" :src="'http://localhost:9000/' + aField.blueSrc" alt="blue"/>
              </div>
              <div v-else-if="playerListBufferRed === 0 && !aField.colour">
                <img class="fig-cards" type="image" :src="'http://localhost:9000/' + aField.redSrc" alt="red"/>
              </div>
              <div v-else>
              </div>
            </td>
            <td v-else-if="aField.isWater || aField.row === 4 || aField.row === 5" class="char-pic">
            </td>
            <td v-else class="char-pic field">
              <div v-if="currentPlayer === player">
                <input class="fig-cards" type="image" @click="clickSet(aField.row, aField.col)"
                       :src="'http://localhost:9000/' + aField.blackSrc" alt="black"/>
              </div>
              <div v-else-if="currentPlayer !== player">
                <img class="fig-cards" type="image"
                     :src="'http://localhost:9000/' + aField.blackSrc" alt="black"/>
              </div>
            </td>
          </template>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "InitGame",
  data() {
    return {
      row: 0,
      col: 0,
      charac: "",
    }
  },
  props: {
    size: Number,
    fields: Array,
    currentPlayerIndex: Number,
    currentPlayer: String,
    playerListBufferBlue: Number,
    playerListBufferRed: Number,
    gameStatus: String,
    border: Object,
    player: String
  },
  methods: {
    set(row, col, charac) {
      console.log(this.player)
      window.websocket.send(JSON.stringify({
        "set": {
          "row": row,
          "col": col,
          "charac": charac
        }
      }))
    },
    clickSet(row, col) {
      this.row = row
      this.col = col
    },

    onkeydown(event) {
      switch (event.keyCode) {
        case 70:
        case 102:
          this.charac = 'F'; // F
          break;
        case 66:
        case 98:
          this.charac = 'B'; // B
          break;
        case 77:
        case 109:
          this.charac = 'M'; // M
          break;
        case 49:
          this.charac = '1'; // 1
          break;
        case 50:
          this.charac = '2'; // 2
          break;
        case 51:
          this.charac = '3'; // 3
          break;
        case 52:
          this.charac = '4'; // 4
          break;
        case 53:
          this.charac = '5'; // 5
          break;
        case 54:
          this.charac = '6'; // 6
          break;
        case 55:
          this.charac = '7'; // 7
          break;
        case 56:
          this.charac = '8'; // 8
          break;
        case 57:
          this.charac = '9'; // 9
          break;
      }
      if (this.charac !== "") {
        this.set(this.row, this.col, this.charac)
      }
    },
  },
  created() {
    window.onkeydown = this.onkeydown
  },

}
</script>

<style>
@import '../assets/styles/main.css';
</style>