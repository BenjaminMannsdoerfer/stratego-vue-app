<template>
  <v-app>
    <Start v-if="status === 'start' && authentication === true" :lobby="lobby" :player="player"></Start>

    <SetNames v-else-if="status === 'lobby'" :status="status" :lobby="lobby" :player="player"></SetNames>

    <Board v-else-if="status === 'Board'" :size="size" :fields="fields" :currentPlayerIndex="currentPlayerIndex"
           :currentPlayer="currentPlayer" :playerListBufferBlue="playerListBufferBlue"
           :playerListBufferRed="playerListBufferRed"
           :gameStatus="gameStatus" :border="border" :player="player"></Board>

  </v-app>
</template>

<script>

import Start from "../components/Start";
import SetNames from "../components/SetNames";
import InitGame from "../components/InitGame";
import PlayGame from "../components/PlayGame";
import Board from "../components/Board";
import {firebaseAuth} from "@/main";

export default {
  name: 'Home',
  data: () => ({
    authentication: false,
    player: "",
    size: 10,
    fields: [],
    currentPlayerIndex: 0,
    currentPlayer: "",
    playerListBufferBlue: 40,
    playerListBufferRed: 40,
    gameStatus: "",
    border: {},
    status: "start",
    lobby: {
      participants: []
    },
  }),
  components: {
    Board,
    PlayGame,
    InitGame,
    SetNames,
    Start,
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
        window.onclose = function () {
          console.log('Connection with Websocket Closed!');
        };

        window.onerror = function (error) {
          console.log('Error in Websocket Occured: ' + error);
        };
      }
      window.websocket.onclose = function(event) {
        console.log("WebSocket is closed now.");
      };
      window.websocket.onmessage = (e) => {
        if (typeof e.data === "string") {
          let json = JSON.parse(e.data);
          console.log(e.data)
          if (Object.keys(json)[0] === "status") {
            this.status = json.status
          } else if (Object.keys(json)[1] === "lobby") {
            this.player = json.player
            this.lobby.participants = json.lobby
          } else if (Object.keys(json)[0] === "lobby") {
            this.lobby.participants = json.lobby
          } else {
            this.size = json.matchfieldSize;
            this.fields = json.matchField
            this.currentPlayerIndex = json.currentPlayerIndex
            this.currentPlayer = json.currentPlayer
            this.gameStatus = json.gameStatus
            this.playerListBufferBlue = json.playerListBufferBlue
            this.playerListBufferRed = json.playerListBufferRed
            this.border = json.border
          }
        }
      }
      firebaseAuth.getAuth().onAuthStateChanged(user =>  {
        if (user) {
          // User is signed in.
          console.log(user.displayName)
          console.log("User is signed in.")
          return this.authentication = true;
        } else {
          // No user is signed in.
          console.log("No user is signed in.")
          return this.authentication = false;
        }
      });
    },
  },
  created() {
    this.createWebsocket();
  }

}
</script>

<style>
@import '../assets/styles/main.css';
</style>
