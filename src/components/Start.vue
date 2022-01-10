<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-center"><h2>{{ "Welcome to Stratego" }}</h2></div>
          <div class="card-body">
            <v-row justify="center">
              <v-col class="12" sm="6" md="6">
                <v-text-field
                    background-color="#fcf5da"
                    label="Enter your name"
                    solo
                    v-model="player"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="6">
                <v-img src="@/assets/images/media/stratego_start.png" class="margin-center" justify="center"
                       @click="changeStatus()" height="93" width="320"/>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      player: "",
    }
  },
  props: {
    lobby: Object,
    websocket: WebSocket
  },
  methods: {
    changeStatus() {
      this.websocket.send(JSON.stringify({
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
      this.websocket.send(JSON.stringify({
        "lobby": {
          "currentPlayer": this.player
        }
      }))
    }
  },
}
</script>

<style>
@import '../assets/styles/main.css';
</style>