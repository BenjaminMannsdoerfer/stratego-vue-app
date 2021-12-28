<template>
  <v-app>
    <Login v-if="authStatus" @statusEvent="updateStatus"></Login>
    <Register v-else></Register>
  </v-app>

</template>

<script>
import Register from "../components/Register";
import Login from "../components/Login";

export default {
  name: "Authentication",
  components: {Login, Register},
  data () {
    return {
      authStatus: true
      }
    },
  methods: {
    updateStatus(authStatus) {
      this.authStatus = authStatus
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>