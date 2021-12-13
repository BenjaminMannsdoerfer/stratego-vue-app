<template>
  <v-app>
  <Start v-if="status === 'start'"></Start>

    <SetNames v-else-if="status === 'lobby'" :status="status" ></SetNames>

    <InitGame v-else-if="status === 'initGame'" ></InitGame>

    <PlayGame v-else-if="status === 'playGame'" :size="size" :fields="fields" :current-player-index="currentPlayerIndex"
    :current-player="currentPlayer" :player-list-buffer-blue="playerListBufferBlue" :player-list-buffer-red="playerListBufferRed"
    :game-status="gameStatus" :bord="bord"></PlayGame>

  </v-app>
</template>

<script>

import Start from "../components/Start";
import SetNames from "../components/SetNames";
import InitGame from "../components/InitGame";
import PlayGame from "../components/PlayGame";
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
    bord: { },
    status: "start"
  }),
  components: {
    PlayGame,
    InitGame,
    SetNames,
    Start
  },
  methods: {
    createWebsocket() {
      //this.websocket.setTimeout
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
          this.size = json.matchfieldSize;
          this.fields = json.matchField
          this.currentPlayerIndex = json.currentPlayerIndex
          this.currentPlayer = json.currentPlayer
          this.gameStatus = json.gameStatus
          this.playerListBufferBlue = json.playerListBufferBlue
          this.playerListBufferRed = json.playerListBufferRed
          this.bord = json.border
          this.status = json.status
          if (this.playerListBufferBlue === 0 && this.playerListBufferRed === 0 && window.location.href.indexOf("initGame") > -1) {
            this.goToPlayGame()
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
.backgroundd {
  background-color: #fcf5da;
}
</style>
