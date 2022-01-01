<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
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
                      v-model="email"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-3 auth-button">
                  <button type="submit" class="btn btn-primary mr-10" @click="changeEmail()">Change Email</button>
                  <button type="submit" class="btn btn-primary mr-10" @click="changePassword()">Change Password</button>
                  <button type="submit" class="btn btn-primary" @click="deleteAccount()">Delete Account</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {firebaseAuth} from "@/main";

export default {
  name: "Account",
  data() {
    return {
      email: this.$store.getters.user.email
    }
  },
  methods: {
    changeEmail() {

    },
    changePassword() {
      this.loginStatus = 'changePassword'
      this.$emit('statusEvent', this.loginStatus)
    },
    deleteAccount() {
      const user = firebaseAuth.getAuth().currentUser;
      firebaseAuth.deleteUser(user).then(() => {
        console.log("Account deleted")
        // User deleted.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    }
  }
}
</script>

<style scoped>

</style>