<template>
  <v-app>
    <Login v-if="authStatus === 'login' && loginStatus === false" @statusEvent="updateStatus"></Login>
    <Account v-else-if="authStatus === 'account' && loginStatus === true" @statusEvent="updateStatus"></Account>
    <ChangePassword v-else-if="authStatus === 'changePassword' && loginStatus === true" @statusEvent="updateStatus"></ChangePassword>
    <ForgotPassword v-else-if="authStatus === 'forgotPassword' && loginStatus === false" @statusEvent="updateStatus"></ForgotPassword>
    <Register v-else-if="authStatus === 'register' && loginStatus === false" @statusEvent="updateStatus"></Register>
  </v-app>

</template>

<script>
import Register from "../components/Register";
import Login from "../components/Login";
import ForgotPassword from "@/components/ForgotPassword";
import Account from "@/components/Account";
import {firebaseAuth} from "@/main";
import ChangePassword from "@/components/ChangePassword";

export default {
  name: "Authentication",
  components: {ChangePassword, ForgotPassword, Login, Register, Account},
  data () {
    return {
      authStatus: 'login',
      loginStatus: false
      }
    },
  methods: {
    updateStatus(authStatus) {
      this.authStatus = authStatus
    }
  },
  created() {
    firebaseAuth.getAuth().onAuthStateChanged(user =>  {
      if (user) {
        // User is signed in.
        console.log(user.displayName)
        console.log("User is signed in.")
        this.authStatus = 'account'
        return this.loginStatus = true;
      } else {
        // No user is signed in.
        console.log("No user is signed in.")
        return this.loginStatus = false;
      }
    });
  }
}
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>