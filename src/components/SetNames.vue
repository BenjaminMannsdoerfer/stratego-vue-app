<template>
  <v-form><v-container fluid>
    <v-row align="center">
      <v-col
          class="d-flex"
          cols="12"
          sm="6"
      >
        <v-select item-text="name" item-value="value" :items="items" @change="getMatchfieldSize" label="select matchfield size">
        </v-select>
      </v-col>
    </v-row>
  </v-container>

    <v-container>
      <v-row>

        <v-col
            cols="12"
            sm="6"
            md="3"
        >
          <v-text-field
              label="Blue"
              solo
              v-model="player1"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="3"
        >
          <v-text-field
              label="Red"
              solo
              v-model="player2"
          ></v-text-field>
        </v-col>
        <div class="my-2">
          <v-btn
              x-large
              color="success"
              dark
              @click="getNames()"
          >
            Extra large Button
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'SetNames',
  data () {
    return {
      player1: '',
      player2: '',
        items: [{name: 'small', value: 4}, {name: 'medium', value: 7}, {name: 'large', value: 10
        }],
    }
  },
  methods: {
    changeStatus() {
      window.websocket.send(JSON.stringify({
        "status": {
          "currentStatus": "Board"
        }
      }))
    },
    getMatchfieldSize: function(size) {
      switch (size) {
        case 4:
          window.websocket.send(JSON.stringify({
            "small": {
              "matchfieldSize": size
            }
          }))
          break;
        case 7:
          window.websocket.send(JSON.stringify({
            "medium": {
              "matchfieldSize": size
            }
          }))
          break;
        case 10:
          window.websocket.send(JSON.stringify({
            "large": {
              "matchfieldSize": size
            }

          }))
          break;
      }
    },
    getNames: function () {
      this.changeStatus()
      window.websocket.send(JSON.stringify({
        "setNames": {
          "player1": this.player1,
          "player2": this.player2
        }
      }))
    },

  },
}
</script>

<style scoped>

</style>