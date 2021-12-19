<template>
  <v-app id="inspire" class="backgroundd">
    <v-navigation-drawer
        color="#ecd88a"
      v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Stratego
          </v-list-item-title>
          <v-list-item-subtitle>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        app
        dark
        src="@/assets/stratego_title.png"
        height="200"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(0,0,0,0), rgba(0,0,0,0)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon si @click="drawer = !drawer">

      </v-app-bar-nav-icon>

      <v-app-bar-title></v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

window.websocket = new WebSocket("ws://localhost:9000/websocket")
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-fencing', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
    ],
    settings : [
      { listItem: 'Join', to: '/playGame' }
    ],
  }),
}
</script>

<style>
@import '/assets/styles/main.css';
</style>