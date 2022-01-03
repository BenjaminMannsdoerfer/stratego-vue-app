<template>
  <v-app>
    <Login v-if="authStatus === 'login' && loginStatus === false" @statusEvent="updateStatus"></Login>
    <Account v-else-if="authStatus === 'account' && loginStatus === true" @statusEvent="updateStatus"
             @loginEvent="updateLogin"></Account>
    <ChangePassword v-else-if="authStatus === 'changePassword' && loginStatus === true"
                    @statusEvent="updateStatus"></ChangePassword>
    <ChangeEmail v-else-if="authStatus === 'changeEmail' && loginStatus === true"
                 @statusEvent="updateStatus"></ChangeEmail>
    <ForgotPassword v-else-if="authStatus === 'forgotPassword' && loginStatus === false"
                    @statusEvent="updateStatus"></ForgotPassword>
    <Register v-else-if="authStatus === 'register' && loginStatus === false" @statusEvent="updateStatus"></Register>
  </v-app>
</template>

<script>
import Register from "../components/Register";
import Login from "../components/Login";
import ForgotPassword from "@/components/ForgotPassword";
import Account from "@/components/Account";
import ChangePassword from "@/components/ChangePassword";
import ChangeEmail from "@/components/ChangeEmail";
import {firebaseAuth} from "@/main";

export default {
  name: "Authentication",
  components: {ChangePassword, ChangeEmail, ForgotPassword, Login, Register, Account},
  data() {
    return {
      authStatus: 'login',
      loginStatus: false
    }
  },
  methods: {
    updateStatus(authStatus) {
      this.authStatus = authStatus
      console.log(this.authStatus)
    },
    updateLogin(loginStatus) {
      this.loginStatus = loginStatus
      console.log(this.loginStatus)
    }
  },
  created() {
    firebaseAuth.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.authStatus = 'account'
        return this.loginStatus = true;
      } else {
        return this.loginStatus = false;
      }
    });
  }
}
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>