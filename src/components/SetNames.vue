<template>
  <v-form>
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
      player2: ''
    }
  },
  methods: {
    getNames: function () {
      console.log(this.player1)
      window.websocket.send(JSON.stringify({
        "setNames": {
          "player1": this.player1,
          "player2": this.player2
        }
      }))
    }
  },
}
</script>

<style scoped>

</style>