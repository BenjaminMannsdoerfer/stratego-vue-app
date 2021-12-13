<template>
  <div class="row text-center">
  <div class="init-game-top">
    <img class="img-fluid img-game-top" :src="'http://localhost:9000/' + border.top"/>
  </div>
  <div class="mid-border">
    <div class="row justify-content-center">
      <div class="col-auto init-game-left">
        <img class="img-game-left" :src="'http://localhost:9000/' + border.left"/>
      </div>
      <div id="gamefield" class="col-auto init-game-mid">
        <table class="matchfield">
          <tbody>
          <template v-for="(row, index) in fields">
            <tr :key="'row' + index">
              <template v-for="(aField, index) in row.cols">
                <td v-if="aField.isSet" class="char-pic field" :key="'aField' + index">
                  <div v-if="aField.colour && playerListBufferBlue !== 0">
                    <input class="fig-cards blue" type="image" :src="'http://localhost:9000/' + aField.figSrc" alt=""/>
                  </div>
                  <div v-else-if="!aField.colour && playerListBufferRed !== 0">
                    <input class="fig-cards red" type="image" :src="'http://localhost:9000/' + aField.figSrc" alt=""/>
                  </div>
                  <div v-else-if="playerListBufferBlue === 0 && aField.colour">
                    <input class="fig-cards" type="image" :src="'http://localhost:9000/' + aField.blueSrc" alt="blue"/>
                  </div>
                  <div v-else-if="playerListBufferRed === 0 && !aField.colour">
                    <input class="fig-cards" type="image" :src="'http://localhost:9000/' + aField.redSrc" alt="red"/>
                  </div>
                  <div v-else>
                  </div>
                </td>
                <td v-else-if="aField.isWater || aField.row === 4 || aField.row === 5" class="char-pic">
                </td>
                <td v-else class="char-pic field">
                  <input class="fig-cards" type="image" @click="clickSet(aField.row, aField.col)"
                         :src="'http://localhost:9000/' + aField.blackSrc" alt="black"/>
                </td>
              </template>
            </tr>
          </template>
          </tbody>
        </table>
      </div>
      <div class="col-auto init-game-right">
        <img class="img-game-right" :src="'http://localhost:9000/' + border.right"/>
      </div>
    </div>
  </div>
    <div class="init-game-bot">
      <img class="img-game-bot" :src="'http://localhost:9000/' + border.bot"/>
    </div>

    <div class="my-2">
        <v-btn
            x-large
            color="success"
            dark
            @click="init()"
        >
          Extra large Button
        </v-btn>
    </div>
  </div>
</template>


<script>
export default {
  name: "InitGame",
  data() {
    return {
      size: 10,
      fields: [],
      currentPlayerIndex: 0,
      currentPlayer: "",
      playerListBufferBlue: 40,
      playerListBufferRed: 40,
      gameStatus: "",
      row: 0,
      col: 0,
      charac: "",
      setAttack: false,
      dir: '',
      rowD: 0,
      colD: 0,
      border: {}

    }
  },
  methods: {
    createWebsocket() {
      window.websocket.onmessage = (e) => {
        if (typeof e.data === "string") {
          let json = JSON.parse(e.data);
          console.log(e.data)
          this.size = json.matchfieldSize;
          this.fields = json.matchField
          this.currentPlayerIndex = json.currentPlayerIndex
          this.currentPlayer = json.currentPlayer
          this.gameStatus = json.gameStatus
          this.playerListBufferBlue = json.playerListBufferBlue
          this.playerListBufferRed = json.playerListBufferRed
          this.border = json.border
          if (this.playerListBufferBlue === 0 && this.playerListBufferRed === 0 && window.location.href.indexOf("initGame") > -1) {
            this.goToPlayGame()
          }
        }
      }
    },
    changeStatus() {
      window.websocket.send(JSON.stringify({
        "status": {
          "currentStatus": "playGame"
        }
      }))
    },
    async goToPlayGame() {
      this.changeStatus()
      window.websocket.send(JSON.stringify({
        "join": {
          "playGame": true,
        }
      }))
      await new Promise(resolve => setTimeout(resolve, 2000));
    },
    init() {
      this.changeStatus()
      window.websocket.send(JSON.stringify({
        "init": {
          "playGame": true,
        }
      }))
    },

    set(row, col, charac) {
      window.websocket.send(JSON.stringify({
        "set": {
          "row": row,
          "col": col,
          "charac": charac
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
          console.log(row + " " + col);
        }
      }
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
      if (this.charac !== "") {
        this.set(this.row, this.col, this.charac)
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
    this.createWebsocket();
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