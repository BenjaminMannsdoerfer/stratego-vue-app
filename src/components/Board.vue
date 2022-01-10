<template>
  <div class="backgroundd text-center" style="flex: 0 0 auto">
    <div v-if="gameStatus === 'WON'">
      <h2 v-if="currentPlayerIndex === 0" class="color-blue">
        {{ currentPlayer + " you found the flag and won the game!" }}</h2>
      <h2 v-if="currentPlayerIndex === 1" class="color-red">
        {{ currentPlayer + " you found the flag and won the game!" }}</h2>
      <div class="my-2">
        <v-btn
            x-large
            color="rgba(192,141,43,255)"
            @click="changeStatus()"
        >
          new game
        </v-btn>
      </div>
    </div>
    <div v-else>
      <h2 v-if="playerListBufferRed === 0 && currentPlayerIndex === 0" class="color-blue">
        {{ currentPlayer + " it's your turn" }}</h2>
      <h2 v-else-if="playerListBufferRed === 0 && currentPlayerIndex === 1" class="color-red">
        {{ currentPlayer + " it's your turn" }}</h2>
      <h2 v-else-if="playerListBufferRed > 0 && currentPlayerIndex === 0" class="color-blue">
        {{ "Enter your figures " + currentPlayer }}</h2>
      <h2 v-else-if="playerListBufferRed > 0 && currentPlayerIndex === 1" class="color-red">
        {{ "Enter your figures " + currentPlayer }}</h2>
    </div>
    <div class="init-game-top">
      <img class="img-fluid img-game-top" :src="url + border.top" alt="border top"/>
    </div>
    <div class="mid-border">
      <div class="row justify-content-center">
        <div class="col-auto init-game-left">
          <img class="img-game-left" :src="url + border.left" alt="border left"/>
        </div>
        <InitGame v-if="this.playerListBufferRed > 0" :size="size" :fields="fields"
                  :currentPlayerIndex="currentPlayerIndex"
                  :currentPlayer="currentPlayer" :playerListBufferBlue="playerListBufferBlue"
                  :playerListBufferRed="playerListBufferRed"
                  :gameStatus="gameStatus" :border="border" :player="player" :websocket="websocket"></InitGame>
        <PlayGame v-else-if="this.playerListBufferRed === 0" :size="size" :fields="fields"
                  :currentPlayerIndex="currentPlayerIndex"
                  :currentPlayer="currentPlayer" :playerListBufferBlue="playerListBufferBlue"
                  :playerListBufferRed="playerListBufferRed"
                  :gameStatus="gameStatus" :border="border" :player="player" :websocket="websocket"></PlayGame>
        <div class="col-auto init-game-right">
          <img class="img-game-right" :src="url + border.right" alt="border right"/>
        </div>
      </div>
    </div>
    <div class="init-game-bot">
      <img class="img-game-bot" :src="url + border.bot" alt="border bot"/>
    </div>
    <div class="my-2">
      <v-btn v-if="this.playerListBufferRed !== 0"
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
  data() {
    return {
      url: process.env.VUE_APP_MY_DOMAIN
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
    player: String,
    websocket: WebSocket
  },
  components: {PlayGame, InitGame},
  methods: {
    init() {
      this.websocket.send(JSON.stringify({
        "init": {
          "playGame": true,
        }
      }))
    },
    changeStatus() {
      this.websocket.send(JSON.stringify({
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