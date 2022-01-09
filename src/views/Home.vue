<template>
  <v-app>
    <Start v-if="status === 'start' && authentication === true && openSocket === true" :lobby="lobby" :player="player" :websocket="websocket"></Start>
    <NoLogin v-else-if="authentication === false && openSocket === true"></NoLogin>
    <SetNames v-else-if="status === 'lobby' && openSocket === true" :status="status" :lobby="lobby" :player="player" :websocket="websocket"></SetNames>
    <Board v-else-if="status === 'Board' && openSocket === true" :size="size" :fields="fields" :currentPlayerIndex="currentPlayerIndex"
           :currentPlayer="currentPlayer" :playerListBufferBlue="playerListBufferBlue"
           :playerListBufferRed="playerListBufferRed"
           :gameStatus="gameStatus" :border="border" :player="player" :websocket="websocket"></Board>
    <NoWebsocketAvailable v-else-if="openSocket === false"></NoWebsocketAvailable>
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="#c08d2b"
        @click="toTop"
    >
      <v-icon color="black">mdi-arrow-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>

import Start from "../components/Start";
import SetNames from "../components/SetNames";
import InitGame from "../components/InitGame";
import PlayGame from "../components/PlayGame";
import Board from "../components/Board";
import {firebaseAuth} from "@/main";
import NoLogin from "@/components/NoLogin";
import NoWebsocketAvailable from "@/components/NoWebsocketAvailable";

export default {
  name: 'Home',
  data: () => ({
    fab: false,
  }),
  props: {
    websocket: WebSocket,
    authentication: Boolean,
    player: String,
    size: Number,
    fields: Array,
    currentPlayerIndex: Number,
    currentPlayer: String,
    playerListBufferBlue: Number,
    playerListBufferRed: Number,
    gameStatus: String,
    border: Object,
    status: String,
    lobby: Object,
    openSocket: Boolean
  },
  components: {
    NoWebsocketAvailable,
    NoLogin,
    Board,
    PlayGame,
    InitGame,
    SetNames,
    Start,
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
}
</script>

<style>
@import '../assets/styles/main.css';
</style>
