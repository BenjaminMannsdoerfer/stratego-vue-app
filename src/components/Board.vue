<template>
  <div class="row text-center" style="flex: 0 0 auto">
    <div class="init-game-top">
      <img class="img-fluid img-game-top" :src="'http://localhost:9000/' + border.top"/>
    </div>
    <div class="mid-border">
      <div class="row justify-content-center">
        <div class="col-auto init-game-left">
          <img class="img-game-left" :src="'http://localhost:9000/' + border.left"/>
        </div>
        <InitGame v-if="this.playerListBufferRed > 0" :size="size" :fields="fields"
                  :currentPlayerIndex="currentPlayerIndex"
                  :currentPlayer="currentPlayer" :playerListBufferBlue="playerListBufferBlue"
                  :playerListBufferRed="playerListBufferRed"
                  :gameStatus="gameStatus" :border="border"></InitGame>
        <PlayGame v-else-if="this.playerListBufferRed === 0" :size="size" :fields="fields"
                  :currentPlayerIndex="currentPlayerIndex"
                  :currentPlayer="currentPlayer" :playerListBufferBlue="playerListBufferBlue"
                  :playerListBufferRed="playerListBufferRed"
                  :gameStatus="gameStatus" :border="border"></PlayGame>
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
          color="rgba(192,141,43,255)"
          @click="init()"
      >
        set all characters
      </v-btn>
    </div>
  </div>
</template>

<script>
import InitGame from "./InitGame";
import PlayGame from "./PlayGame";

export default {
  name: "Board",
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
  components: {PlayGame, InitGame},
  methods: {
    init() {
      window.websocket.send(JSON.stringify({
        "init": {
          "playGame": true,
        }
      }))
    },
  }

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