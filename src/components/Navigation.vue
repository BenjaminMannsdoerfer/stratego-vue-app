<template>
  <div>
    <v-navigation-drawer
        color="#ecd88a"
        v-model="drawer"
        app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu
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

      <template>
        <v-app-bar-nav-icon si @click="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
      </template>
      <template v-if="user.loggedIn">
        <div class="form-group row justify-end">
          <div class="col-md-2 offset-md-4">
            <div v-if="player === lobby.participants[0]" style="font-size: 20px" class="color-blue">
              {{ "Player: " + player }}
            </div>
            <div v-if="player === lobby.participants[1]" style="font-size: 20px" class="color-red">
              {{ "Player: " + player }}
            </div>
          </div>
          <div class="col-md-2 offset-md-5">
            <v-btn @click.prevent="signOut" class="text-right">
              <v-icon>mdi-arrow-left</v-icon>
              SignOut
            </v-btn>
          </div>
        </div>
      </template>
      <template v-else>
        <v-btn @click.prevent="login" class="text-right">
          <v-icon>fas fa-lock</v-icon>
          Login
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import {firebaseAuth} from "@/main";

export default {
  name: "Navigation",
  data() {
    return {
      drawer: null,
      auth: firebaseAuth,
      name: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  props: {
    items: Array,
    player: String,
    lobby: Object
  },
  methods: {
    signOut() {
      firebaseAuth
          .getAuth()
          .signOut()
          .then(() => {
            this.$router.replace({
              name: "Home"
            });
          });
    },
    login() {
      this.$router.push({
        name: "Authentication"
      });
    },
  }
}
</script>

<style scoped>

</style>