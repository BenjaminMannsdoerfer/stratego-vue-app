<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Stratego
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
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

<!--    <v-app-bar app>-->
<!--      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->

<!--      <v-toolbar-title>Application</v-toolbar-title>-->
<!--    </v-app-bar>-->
    <v-app-bar
        app
        dark
        src="@/assets/stratego_title.png"
        height="400"
        prominent
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(0,0,0,0), rgba(0,0,0,0)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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
      { title: 'Home', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
      { title: 'Game', icon: 'mdi-fencing', to: '/game' },
    ],
  }),
  methods: {
    createWebsocket() {
      //this.websocket.setTimeout
      window.websocket.onopen = () => {
        window.websocket.send(JSON.stringify({
          "connected": {
            "connect": "successful"
          }
        }))
        console.log("Connected to Websocket");
      }

      window.websocket.onclose = () => {
        console.log('Connection with Websocket Closed!');
      };

      window.websocket.onerror = (error) => {
        console.log('Error in Websocket Occured: ' + error);
      };

      window.websocket.onmessage = (e) => {
        if (typeof e.data === "string") {
          let json = JSON.parse(e.data);
          console.log(e.data)
          this.size = json.matchfieldSize;
          this.fields = json.matchField
          this.currentPlayerIndex = json.currentPlayerIndex
          this.currentPlayer = json.currentPlayer
          this.gameStatus = json.gameStatus
          this.playerListBufferBlue = json.playerListBufferBlue
          this.playerListBufferRed = json.playerListBufferRed
          this.border = json.border
          /*this.checkGame()
          if (this.playerListBufferBlue === 0 && this.playerListBufferRed === 0 && window.location.href.indexOf("set") > -1) {
            this.goToPlayGame()
          }*/
        }
      };
    },
    created() {
      this.createWebsocket();
      window.onkeydown = this.onkeydown
    }
  }
}
</script>