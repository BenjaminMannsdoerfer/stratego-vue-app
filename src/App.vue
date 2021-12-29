<template>
  <v-app id="inspire" class="backgroundd">
    <Navigation :items="items"></Navigation>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Navigation from "@/components/Navigation";
window.websocket = new WebSocket(process.env.VUE_APP_WEBSOCKET)
export default {
  components: {Navigation},
  data: () => ({

    items: [
      { title: 'Home', icon: 'mdi-fencing', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
      { title: 'Authentication', icon: 'mdi-account', to: '/authentication' },
    ],
  }),
}
</script>

<style>
@import '/assets/styles/main.css';
</style>