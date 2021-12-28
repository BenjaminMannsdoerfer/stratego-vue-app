<template>

  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
<!--            <div v-if="error" class="alert alert-danger">{{error}}</div>-->
            <form action="#" @submit.prevent="submit">
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
                  <button type="submit" class="btn btn-primary mr-10">Login</button>
                  <button type="submit" class="btn btn-primary" @click="register()">Register</button>
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
export default {
  name: "Login",
  data () {
    return {
      form: {
        email: '',
        password: '',
        loginStatus: true
      }
    }
  },
  props: {
    authStatus: Boolean
  },
  methods: {
    register() {
      this.loginStatus = false
      this.$emit('statusEvent', this.loginStatus)
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/main.css';
</style>