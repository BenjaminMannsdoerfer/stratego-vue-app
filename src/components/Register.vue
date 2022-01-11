<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form action="#" @submit.prevent="register">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right align-self-center">Email</label>
                <div class="col-md-6">
                  <input
                      id="email"
                      type="email"
                      class="form-control input-field"
                      name="email"
                      value
                      required
                      autofocus
                      v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right align-self-center">Password</label>

                <div class="col-md-6">
                  <input
                      id="password"
                      type="password"
                      class="form-control input-field"
                      name="password"
                      required
                      v-model="form.password"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4 auth-button">
                  <v-btn
                      type="submit"
                      color="rgba(192,141,43,255)"
                      class="btn btn-primary mr-10"
                      @click="back">
                    <v-icon>mdi-arrow-left</v-icon>
                    Back
                  </v-btn>
                  <v-btn
                      type="submit"
                      color="rgba(192,141,43,255)"
                      class="btn btn-primary"
                  >Register
                  </v-btn>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {firebaseAuth} from "@/main";

export default {
  name: "Register",
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loginStatus: 'login',
      snackbarStatus: 'register',
      password_strength_show: false,
      password_beispiel:"123"
    }
  },
  methods: {
    async register() {
      this.$emit('snackbarEvent', this.snackbarStatus)
      /*// encode as UTF-8
      const msgBuffer = new TextEncoder().encode(this.form.password);
      // hash the message
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      // convert ArrayBuffer to Array
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      // convert bytes to hex string
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');*/
      var checknumber = this.checkPasswordStrenght(this.form.password)
      if(!checknumber) {
        alert("password too short")
      }
      if(checknumber) {
        await firebaseAuth.createUserWithEmailAndPassword(firebaseAuth.getAuth(), this.form.email, this.form.password)
            .then(data => {
              const actionCodeSettings = {
                url: `${process.env.VUE_APP_HOST_NAME}?email=${data.user.email}`,
              };
              firebaseAuth.sendEmailVerification(data.user, actionCodeSettings);
            })
            .catch(err => {
              this.error = err.message;
            });
      }
    },
    back() {
      this.$emit('statusEvent', this.loginStatus)
    },
    checkPasswordStrenght(password){
        if (password.length < 6) {
          return false
        }
        //if (password.length > 12) {
        //  return true
        //}
        return true
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>