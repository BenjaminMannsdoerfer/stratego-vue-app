<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="4">
      <router-link to="/setNames">
        <v-img src="@/assets/logo.png" @click="getMatchfieldSize(10)" height="93" width="320"/>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Start',
    methods: {
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
    }
  }
</script>
