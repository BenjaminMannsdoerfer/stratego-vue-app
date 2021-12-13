<template>
  <v-row justify="center" align="center" class="backgroundd">
    <v-col cols="12" sm="4">
        <v-img src="@/assets/logo.png" @click="changeStatus()" height="93" width="320"/>
    </v-col>
  </v-row>
</template>

<script>

  export default {
    name: 'Start',
    props: {
      status: String
    },
    methods: {
      changeStatus() {
        window.websocket.send(JSON.stringify({
          "status": {
            "currentStatus": "lobby"
          }
        }))
      }
    }
  }
</script>
