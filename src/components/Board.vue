<template>
  <div class="row text-center" style="flex: 0 0 auto">
    <div v-if="gameStatus === 'WON'">
      <h1 v-if="currentPlayerIndex === 0" class="color-blue">{{currentPlayer + " you found the flag and won the game!"}}</h1>
      <h1 v-if="currentPlayerIndex === 1" class="color-red">{{currentPlayer + " you found the flag and won the game!"}}</h1>
      <v-btn
          x-large
          color="rgba(192,141,43,255)"
          @click="changeStatus()"
      >
        new game
      </v-btn>
    </div>
    <div v-else>
    <h1 v-if="playerListBufferRed === 0 && currentPlayerIndex === 0" class="color-blue">{{currentPlayer + " it's your turn"}}</h1>
    <h1 v-else-if="playerListBufferRed === 0 && currentPlayerIndex === 1" class="color-red">{{currentPlayer + " it's your turn"}}</h1>
    <h1 v-else-if="playerListBufferRed > 0 && currentPlayerIndex === 0" class="color-blue">{{"Enter your figures " + currentPlayer}}</h1>
    <h1 v-else-if="playerListBufferRed > 0 && currentPlayerIndex === 1" class="color-red">{{"Enter your figures " + currentPlayer}}</h1>
    </div>
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
    border: Object,
    player: String
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
    changeStatus() {
      window.websocket.send(JSON.stringify({
        "status": {
          "currentStatus": "start"
        }
      }))
    },
  }

}
</script>

<style>
@import '../assets/styles/main.css';
</style>