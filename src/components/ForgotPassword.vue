<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Forgot Password</div>
          <div class="card-body">
            <form action="#" @submit.prevent="resetPassword">
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
                      @click="resetPassword">
                    Continue
                  </v-btn>
                </div>
              </div>
            </form>
            <v-snackbar
                v-model="snackbar"
            >
              {{ snackbarText }}
              <template v-slot:action="{ attrs }">
                <v-btn
                    color="red"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {firebaseAuth} from "@/main";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: '',
      error: '',
      emailSending: false,
      snackbar: false,
      snackbarText: 'A password recovery email has been sent to you. Please check your emails.',
      authStatus: 'login'
    }
  },
  methods: {
    back() {
      this.$emit('statusEvent', this.authStatus)
    },
    resetPassword() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
      firebaseAuth.sendPasswordResetEmail(firebaseAuth.getAuth(), this.email)
          .then(() => {
            this.emailSending = false;
          })
          .catch(error => {
            this.emailSending = false;
            this.error = error.message;
          });
      this.snackbar = true
    }
  }
}
</script>

<style scoped>

</style>