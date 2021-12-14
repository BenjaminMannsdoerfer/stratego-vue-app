<template>
        <div id="gamefield" class="col-auto init-game-mid">
          <table class="matchfield">
            <tbody>
            <template v-for="(row, index) in fields">
              <tr :key="'row' + index">
                <template v-for="(aField, index) in row.cols">
                  <td v-if="aField.isSet" class="char-pic field" :key="'aField' + index">
                    <div v-if="aField.colour && currentPlayerIndex === 0" >
                      <input class="fig-cards blue" type="image" @click="clickSet(aField.row, aField.col)" :src="'http://localhost:9000/' + aField.figSrc" alt=""/>
                    </div>
                    <div v-else-if="!aField.colour && currentPlayerIndex === 1">
                      <input class="fig-cards red" type="image" @click="clickSet(aField.row, aField.col)" :src="'http://localhost:9000/' + aField.figSrc" alt=""/>
                    </div>
                    <div v-else-if="currentPlayerIndex === 1 && aField.colour">
                      <input class="fig-cards" type="image" @click="clickSet(aField.row, aField.col)" :src="'http://localhost:9000/' + aField.blueSrc" alt="blue"/>
                    </div>
                    <div v-else-if="currentPlayerIndex === 0 && !aField.colour">
                      <input class="fig-cards" type="image" @click="clickSet(aField.row, aField.col)" :src="'http://localhost:9000/' + aField.redSrc" alt="red"/>
                    </div>
                  </td>
                  <td v-else-if="aField.isWater" class="char-pic">
                  </td>
                  <td v-else class="char-pic field">
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
  name: 'PlayGame',
  data() {
    return {
      row: 0,
      col: 0,
      setAttack: false,
      dir: '',
      rowD: 0,
      colD: 0,
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
      border: Object
  },
  methods: {
    move(dir, row, col) {
      window.websocket.send(JSON.stringify({
        "move": {
          "row": row,
          "col": col,
          "dir": dir
        }
      }))
    },

    attack(row, col, rowD, colD) {
      window.websocket.send(JSON.stringify({
        "attack": {
          "row": row,
          "col": col,
          "rowD": rowD,
          "colD": colD
        }
      }))
    },

    clickSet(row, col) {
      if (this.setAttack === false) {
        this.row = row
        this.col = col
      } else {
        if (this.row !== undefined || this.col !== undefined) {
          this.rowD = row
          this.colD = col
          if (this.gameStatus !== "WON") {
            this.attack(this.row, this.col, this.rowD, this.colD)
            this.setAttack = false
          }
        }
      }
    },

    onkeydown(event) {
      switch (event.keyCode) {
        case 65:
        case 87:
          this.setAttack = true;
          break;
        case 68:
        case 100:
        case 40:
          this.dir = 'd'; // d
          break;
        case 85:
        case 117:
        case 38:
          this.dir = 'u'; // u
          break;
        case 76:
        case 108:
        case 37:
          this.dir = 'l'; // l
          break;
        case 82:
        case 114:
        case 39:
          this.dir = 'r'; // r
          break;
      }
      if (this.dir === undefined || this.dir === "") {
      } else if (this.dir.length > 1 || this.row === undefined || this.col === undefined || this.setAttack === true) {
      } else {
        if (this.gameStatus !== "WON") {
          this.move(this.dir, this.row, this.col);
        }
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
