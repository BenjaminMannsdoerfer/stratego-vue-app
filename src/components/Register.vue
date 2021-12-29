<template>
    <div class="backgroundd">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <form action="#" @submit.prevent="register">

                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right align-self-center">Name</label>
                <div class="col-md-6">
                  <input
                      id="name"
                      type="name"
                      class="form-control"
                      name="name"
                      value
                      required
                      autofocus
                      v-model="form.name"
                  />
                </div>
                </div>

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
                    <v-btn type="submit" class="btn btn-primary mr-10" @click="back" ><v-icon>mdi-arrow-left</v-icon>Back</v-btn>
                    <button type="submit" class="btn btn-primary">Register</button>
                  </div>
                  <div class="col-md-8 offset-md-4">

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
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      loginStatus: false
    }
  },
  methods: {
    register() {
      firebaseAuth.createUserWithEmailAndPassword(firebaseAuth.getAuth(), this.form.email, this.form.password)
          .then(data => {
            data.user
                .updateProfile({
                  displayName: this.form.name
          })})
      .catch(err => {
        this.error = err.message;
      });
    },
    back() {
      this.loginStatus = true
      this.$emit('statusEvent', this.loginStatus)
    },
  }
}
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>