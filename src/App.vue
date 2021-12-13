<template>
  <v-app id="inspire">
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
        height="400"
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


      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
            >
              <v-icon size="50">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
                v-for="(items, index) in settings"
                :key="index"
                @click="join"
            >
              <v-list-item-title>{{ items.listItem }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
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
    settings : [
      { listItem: 'Join', to: '/playGame' }
    ],
  }),
  components: {
  },
  methods: {
    async join() {
      window.websocket.send(JSON.stringify({
        "join": {
          "joinGame": "successful"
        }
      }))
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.$router.push({path: '/playGame'}).catch(() => {
      })
    },
  }
}
</script>