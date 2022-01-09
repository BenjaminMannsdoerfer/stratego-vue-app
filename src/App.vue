<template>
  <v-app id="inspire" class="backgroundd">
    <Navigation :items="items"></Navigation>
    <v-main>
      <router-view :websocket="websocket" :authentication="authentication" :player="player" :size="size"
      :fields="fields" :currentPlayerIndex="currentPlayerIndex" :currentPlayer="currentPlayer"
      :playerListBufferBlue="playerListBufferBlue" :playerListBufferRed="playerListBufferRed" :gameStatus="gameStatus"
      :border="border" :status="status" :lobby="lobby" :openSocket="openSocket"></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Navigation from "@/components/Navigation";
import {firebaseAuth} from "@/main";

export default {
  components: {Navigation},
  data: () => ({
    websocket: null,
    openSocket: false,
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
    items: [
      {title: 'Home', icon: 'mdi-fencing', to: '/'},
      {title: 'About', icon: 'mdi-help-box', to: '/about'},
      {title: 'Authentication', icon: 'mdi-account', to: '/authentication'},
    ],
  }),
  methods: {
    createWebsocket() {
      this.websocket = new WebSocket(process.env.VUE_APP_WEBSOCKET)
      this.websocket.onopen = () => {
        this.openSocket = true
        this.websocket.send(JSON.stringify({
          "connected": {
            "connect": "successful"
          }
        }))
        console.log("Connected to Websocket");
        this.websocket.onclose = function () {
          console.log('Connection with Websocket Closed!');
        };

        this.websocket.onerror = function (error) {
          this.openSocket = false
          console.log('Error in Websocket Occured: ' + error);
        };
      }
      this.websocket.onclose = function () {
        this.openSocket = false
        console.log("WebSocket is closed now.");
      };
      this.websocket.onmessage = (e) => {
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
      firebaseAuth.getAuth().onAuthStateChanged(user => {
        if (user) {
          return this.authentication = true;
        } else {
          return this.authentication = false;
        }
      });
    },
  },
  created() {
    this.createWebsocket()
  }
}
</script>

<style>
@import '/assets/styles/main.css';
</style>