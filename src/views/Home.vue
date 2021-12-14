<template>
  <v-app>
    <Start v-if="status === 'start'"></Start>

    <SetNames v-else-if="status === 'lobby'" :status="status"></SetNames>

    <Board v-else-if="status === 'Board'" :size="size" :fields="fields" :currentPlayerIndex="currentPlayerIndex"
           :currentPlayer="currentPlayer" :playerListBufferBlue="playerListBufferBlue"
           :playerListBufferRed="playerListBufferRed"
           :gameStatus="gameStatus" :border="border"></Board>

  </v-app>
</template>

<script>

import Start from "../components/Start";
import SetNames from "../components/SetNames";
import InitGame from "../components/InitGame";
import PlayGame from "../components/PlayGame";
import Board from "../components/Board";

export default {
  name: 'Home',
  data: () => ({
    size: 10,
    fields: [],
    currentPlayerIndex: 0,
    currentPlayer: "",
    playerListBufferBlue: 40,
    playerListBufferRed: 40,
    gameStatus: "",
    border: {},
    status: "start"
  }),
  components: {
    Board,
    PlayGame,
    InitGame,
    SetNames,
    Start
  },
  methods: {
    createWebsocket() {
      window.websocket.onopen = () => {
        window.websocket.send(JSON.stringify({
          "connected": {
            "connect": "successful"
          }
        }))
        console.log("Connected to Websocket");
      }
      window.websocket.onmessage = (e) => {
        if (typeof e.data === "string") {
          let json = JSON.parse(e.data);
          console.log(e.data)
          if (Object.keys(json)[0] === "status") {
            console.log(json.status)
            this.status = json.status
          } else {
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
      }
    }
  },
  created() {
    this.createWebsocket();
  }

}
</script>

<style>
@import '../assets/styles/main.css';
</style>
