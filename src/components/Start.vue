<template>
  <v-row justify="center" >
    <v-col cols="12" sm="4">
        <v-img src="@/assets/logo.png" @click="changeStatus()" height="93" width="320"/>
    </v-col>
  </v-row>
</template>

<script>

  export default {
    name: 'Start',
    methods: {
      changeStatus() {
        window.websocket.send(JSON.stringify({
          "status": {
            "currentStatus": "lobby"
          }
        }))
      }
    },
    mounted: function() {
      let elHtml = document.getElementsByTagName('html')[0]
      elHtml.style.overflowY = 'hidden'
    },
    destroyed: function() {
      let elHtml = document.getElementsByTagName('html')[0]
      elHtml.style.overflowY = null
    },
  }
</script>
