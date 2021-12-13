<template>
        <div id="gamefield" class="col-auto init-game-mid">
          <table class="matchfield">
            <tbody>
            <template v-for="(row, index) in fields">
              <tr :key="'row' + index">
                <template v-for="(aField, index) in row.cols">
                  <td v-if="aField.isSet" class="char-pic field" :key="'aField' + index">
                    <div v-if="aField.colour && playerListBufferBlue === 0 && currentPlayerIndex === 0" >
                      <input class="fig-cards blue" type="image" @click="clickSet(aField.row, aField.col)" :src="'http://localhost:9000/' + aField.figSrc" alt=""/>
                    </div>
                    <div v-else-if="!aField.colour && playerListBufferRed === 0 && currentPlayerIndex === 1">
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
/* Bootstrap */

/* every page */

.backgroundd {
  background-color: #fcf5da;
}

.row {
  background-color: #fcf5da;
}

.margin-center {
  margin: auto;
}

/* start page */

.nav-start {
  background-color: rgba(192, 141, 43, 255);
  display: flex;
  list-style: none;
}

/* Style the links inside the navigation bar */
.nav-start a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
}

/* Change the color of links on hover */
.nav-start a:hover {
  background-color: rgba(20, 98, 206, 255);
  color: black;
}

/* Add a color to the active/current link */
.nav-start a.active {
  background-color: #04AA6D;
  color: gold;
}

.subtitl {
  font-family: arial;
}


/* initGame */

.color-blue {
  color: rgba(20, 98, 206, 255);
}

.color-red {
  color: rgba(223, 45, 30, 255);
}

@media screen and (min-width: 875px) {
  .char-pic {
    height: 80px !important;
    width: 80px !important;
  }

  .fig-cards {
    width: 25px;
    height: 50px;
  }

  .hidden {
    margin: auto;
    height: 50px;
    width: 25px;
  }

  .init-game-top {
    width: auto;
    margin: 0 auto;
  }

  .init-game-left {
    padding: 0 !important;
  }

  .init-game-mid {
    padding: 0 !important;
  }

  .init-game-right {
    padding: 0 !important;
    flex: 0 0 auto !important;
  }

  .init-game-bot {
    width: auto;
    margin: 0 auto;
  }

  .matchfield {
    background-image: url(../assets/images/media/matchfield.png);
  }

  .blue {
    margin: auto;
    background-color: rgba(20, 98, 206, 255);
    height: 50px;
    width: 25px;
  }

  .red {
    margin: auto;
    background-color: rgba(223, 45, 30, 255);
    height: 50px;
    width: 25px;
  }

}

@media screen and (min-width: 437px) and (max-width: 874px) {
  .char-pic {
    height: 40px;
    width: 40px;
  }

  .hidden {
    margin: auto;
    height: 25px;
    width: 12px;
  }

  .fig-cards {
    width: 12px;
    height: 25px;
  }

  .init-game-top {
    width: auto;
    margin: 0 auto;
  }

  .img-game-top {
    width: 438px;
    height: 27px;
  }

  .init-game-left {
    padding: 0 !important;
    width: 19px;
    height: 400px;
  }

  .img-game-left {
    width: 19px;
    height: 400px;
  }

  .init-game-mid {
    padding: 0 !important;
    height: 400px;
  }

  .init-game-right {
    padding: 0 !important;
    width: 19px;
    height: 400px;
    flex: 0 0 auto !important;
  }

  .img-game-right {
    width: 19px;
    height: 400px;
  }

  .init-game-bot {
    width: auto;
    margin: 0 auto;
  }

  .img-game-bot {
    width: 438px;
    height: 27px;
  }

  .matchfield {
    background-image: url(../assets/images/media/matchfield_400x400.png);
    height: 400px;
  }

  .blue {
    margin: auto;
    background-color: rgba(20, 98, 206, 255);
    height: 25px;
    width: 12px;
    margin-top: -18px;
  }

  .blue-no-select {
    margin: auto;
    background-color: rgba(20, 98, 206, 255);
    height: 25px;
    width: 12px;
    margin-top: 8px;
  }

  .red {
    margin: auto;
    background-color: rgba(223, 45, 30, 255);
    height: 25px;
    width: 12px;
    margin-top: -18px;
  }

  .red-no-select {
    margin: auto;
    background-color: rgba(223, 45, 30, 255);
    height: 25px;
    width: 12px;
    margin-top: 8px;
  }

  .direction {
    width: 60%;
    height: 10px;
  }
}

.color-blue {
  color: rgba(20, 98, 206, 255);
}

.color-red {
  color: rgba(223, 45, 30, 255);
}

/* game */


/* Bootstrap */
/* soni */
.img {
  display: block;
  max-width: 100%;
  height: auto;
  background-color: #fcf5da;
}

.backgroundd {
  background-color: #fcf5da;
}

.spielfeld_img {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}

table td {
  text-align: center;
  vertical-align: middle;
}

.btn-primary-spacing {
  margin-top: 1%;
}

.mt-0 {
  padding-top: 50px !important;
}

.center_div {
  margin: 0 auto;
  width: 80% /* value of your choice which suits your alignment */
}


.forms {
  padding-top: 50px;
}

@media screen and (max-width: 669px) {
  .about-playfield {
    height: 300px;
    width: 401px;
  }
}

.about-padding {
  padding-top: 100px;
}

table, th {
  padding-left: 200px;
}

table {
  width: 100%;
}

.carousel-inner img {
  margin: auto;
}

.carousel-control-prev-icon {
  filter: invert(1);
}

.carousel-control-next-icon {
  filter: invert(1);
}

.screenshot {
  padding-top: 100px;
  text-align: center;
}

.github_box {
  padding-top: 50px;
  text-align: center;
  margin-bottom: 20px;
}


.nav-start {
  background-color: rgba(192, 141, 43, 255);
  display: flex;
  list-style: none;
}

/* Style the links inside the navigation bar */
.nav-start a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
}

/* Change the color of links on hover */
.nav-start a:hover {
  background-color: rgba(20, 98, 206, 255);;
  color: black;
}

/* Add a color to the active/current link */
.nav-start a.active {
  background-color: #04AA6D;
  color: gold;
}
</style>
