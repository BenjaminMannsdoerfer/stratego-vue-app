<template>
  <v-app>
    <Login v-if="authStatus === 'login'" @statusEvent="updateStatus"></Login>
    <ForgotPassword v-else-if="authStatus === 'forgotPassword'" @statusEvent="updateStatus"></ForgotPassword>
    <Register v-else-if="authStatus === 'register'" @statusEvent="updateStatus"></Register>
  </v-app>

</template>

<script>
import Register from "../components/Register";
import Login from "../components/Login";
import ForgotPassword from "@/components/ForgotPassword";

export default {
  name: "Authentication",
  components: {ForgotPassword, Login, Register},
  data () {
    return {
      authStatus: 'login'
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