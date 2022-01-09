<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-center"><h2>{{ "Welcome to Stratego" }}</h2></div>
          <div class="card-body">
              <v-row justify="center" style="text-align: center">
                <v-col
                    cols="12"
                    sm="6"
                >
                  <h2 v-if="player === lobby.participants[0]" class="color-blue">{{"Player: " + player}}</h2>
                  <h2 v-else-if="player === lobby.participants[1]" class="color-red">{{"Player: " + player}}</h2>

                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col
                    class="d-flex"
                    cols="12"
                    sm="6"
                >
                  <v-select item-text="name" item-value="value" :items="items" @change="getMatchfieldSize"
                            label="select matchfield size">
                  </v-select>
                </v-col>
              </v-row>
              <v-row justify="center" style="text-align: center">

                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                  <h2 v-if="player === lobby.participants[0]" class="color-blue">{{ lobby.participants[0] }}</h2>
                  <h2 v-else-if="player !== lobby.participants[0]" class="color-blue">{{ lobby.participants[0] }}</h2>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                  <h2 v-if="player === lobby.participants[1]" class="color-red">{{ lobby.participants[1] }}</h2>
                  <h2 v-else-if="player !== lobby.participants[1]" class="color-red">{{ lobby.participants[1] }}</h2>
                </v-col>
                <v-row justify="center">
                  <v-col
                      cols="12"
                      sm="6"
                      md="3"
                  >
                    <div class="my-2" id="btn">
                      <v-btn
                          x-large
                          color="rgba(192,141,43,255)"
                          @click="getNames()"
                      >
                        Play
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetNames',
  data() {
    return {
      items: [{name: 'small', value: 4}, {name: 'medium', value: 7}, {
        name: 'large', value: 10
      }],
    }
  },
  props: {
    lobby: Object,
    player: String,
    websocket: WebSocket
  },
  methods: {
    changeStatus() {
      this.websocket.send(JSON.stringify({
        "status": {
          "currentStatus": "Board"
        }
      }))
    },
    getMatchfieldSize: function (size) {
      switch (size) {
        case 4:
          this.websocket.send(JSON.stringify({
            "small": {
              "matchfieldSize": size
            }
          }))
          break;
        case 7:
          this.websocket.send(JSON.stringify({
            "medium": {
              "matchfieldSize": size
            }
          }))
          break;
        case 10:
          this.websocket.send(JSON.stringify({
            "large": {
              "matchfieldSize": size
            }
          }))
          break;
      }
    },
    getNames: function () {
      this.changeStatus()
      this.websocket.send(JSON.stringify({
        "setNames": {
          "player1": this.lobby.participants[0],
          "player2": this.lobby.participants[1]
        }
      }))
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

<style scoped>
@import '../assets/styles/main.css';
</style>