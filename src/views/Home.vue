<template>
  <v-app>
  <Start>

  </Start>
  </v-app>
</template>

<script>

import Start from "../components/Start";
//import PlayGame from "../components/PlayGame";
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
    border: { }
  }),
  components: {
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
