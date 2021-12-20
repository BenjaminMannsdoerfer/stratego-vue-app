<template>
  <v-form class="backgroundd">
    <v-container fluid>
      <v-row justify="center">

        <v-col
            cols="12"
            sm="6"
            md="3"
        >
          <v-text-field
              label="Enter your name"
              solo
              v-model="player"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-img src="@/assets/images/media/stratego_start.png" @click="changeStatus()" height="93" width="320"/>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

export default {
  name: 'Start',
  data() {
    return {
      player: ""
    }
  },
  props: {
    lobby: Object
  },
  methods: {
    changeStatus() {
      window.websocket.send(JSON.stringify({
        "status": {
          "currentStatus": "lobby"
        }
      }))
      this.joinLobby()
    },
    joinLobby() {
      if (this.player === '') {
        return;
      }
      window.websocket.send(JSON.stringify({
        "lobby": {
        "currentPlayer": this.player
            //"updateLobby": this.lobby
      }}))
    },

  },
  mounted: function () {
    let elHtml = document.getElementsByTagName('html')[0]
    elHtml.style.overflowY = 'hidden'
  },
  destroyed: function () {
    let elHtml = document.getElementsByTagName('html')[0]
    elHtml.style.overflowY = null
  },
}
</script>

<style>
@import '../assets/styles/main.css';
</style>