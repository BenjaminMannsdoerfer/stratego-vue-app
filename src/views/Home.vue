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

}
</script>
