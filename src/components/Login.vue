<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form action="#" @submit.prevent="login">
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

              <div class="form-group row">
                <div class="col-md-12 col-form-label text-center" @click="forgotPassword">
                  <p>
                    <a>Forgot Password</a>
                  </p>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-3 auth-button">
                  <button type="submit" class="btn btn-primary mr-10">Login</button>
                  <button type="submit" class="btn btn-primary mr-10" @click="register()">Register</button>
                  <button type="submit" class="btn btn-primary" @click="registerWithGoogle()">Register with Google</button>
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
import {firebaseAuth} from "../main";

export default {
  name: "Login",
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
      loginStatus: ''
    }
  },
  methods: {
    register() {
      this.loginStatus = 'register'
      this.$emit('statusEvent', this.loginStatus)
    },
    forgotPassword() {
      this.loginStatus = 'forgotPassword'
      this.$emit('statusEvent', this.loginStatus)
    },
    login() {
      firebaseAuth
          .signInWithEmailAndPassword(firebaseAuth.getAuth(), this.form.email, this.form.password)
          .then(data => {
            this.$router.replace({ name: "Home" });
          })
          .catch(err => {
            this.error = err.message;
          });
    },
    registerWithGoogle() {
      let provider = new firebaseAuth.GoogleAuthProvider();
      //firebaseAuth.signInWithRedirect(firebaseAuth.getAuth(), provider)
      firebaseAuth.signInWithPopup(firebaseAuth.getAuth(), provider)
      .then((result) => {
        console.log("success")
      })
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>