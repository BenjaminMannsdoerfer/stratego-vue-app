<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Account</div>
          <div class="card-body">
            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-3 auth-button">
                <button type="submit" class="btn btn-primary mr-10" @click="home()">Home</button>
                <button type="submit" class="btn btn-primary mr-10" @click="changePassword()">Change Password</button>
                <button type="submit" class="btn btn-primary mr-10" @click="changeEmail()">Change Email</button>
                <button
                    v-if="auth.getAuth().currentUser.email.includes('@gmail.com') || auth.getAuth().currentUser.email.includes('@googlemail.com')"
                    type="submit" class="btn btn-primary mr-10" @click="reauthenticateDeleteGoogleAccount()">Delete
                  Google Account
                </button>
                <v-row v-else justify="center">
                  <v-dialog
                      v-model="dialog"
                      persistent
                      max-width="600px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                      >
                        Delete acccount
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">Authenticate</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                  label="Email*"
                                  required
                                  v-model="userEmail"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                  label="Password*"
                                  type="password"
                                  required
                                  v-model="userPassword"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="reauthenticateDeleteAccount()"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
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
      userEmail: '',
      userPassword: '',
      userEmailSignIn: '',
      userPasswordSignIn: '',
      newEmail: '',
      authStatus: '',
      loginStatus: true,
      dialog: false,
      auth: firebaseAuth
    }
  },
  methods: {
    changeEmail() {
      this.authStatus = 'changeEmail'
      this.$emit('statusEvent', this.authStatus)
    },
    changePassword() {
      this.authStatus = 'changePassword'
      this.$emit('statusEvent', this.authStatus)
    },
    home() {
      this.$router.push({name: "Home"});
    },
    async reauthenticateDeleteAccount() {
      this.dialog = false
      const user = firebaseAuth.getAuth().currentUser;
      const credential = firebaseAuth.EmailAuthProvider.credential(
          this.userEmail,
          this.userPassword
      );
      await firebaseAuth.reauthenticateWithCredential(user, credential);
      await firebaseAuth.deleteUser(user).then(() => {
        console.log("Account deleted")
        this.authStatus = 'login'
        this.loginStatus = false
        this.$emit('loginEvent', this.loginStatus)
        this.$emit('statusEvent', this.authStatus)
        this.$router.push({name: 'Home'})
      }).catch((error) => {
        console.log(error)
        // An error ocurred
      });
      console.log(this.authStatus + " " + this.loginStatus)
    },
    async reauthenticateDeleteGoogleAccount() {
      const user = firebaseAuth.getAuth().currentUser;
      await firebaseAuth.deleteUser(user).then(() => {
        this.authStatus = 'login'
        this.loginStatus = false
        this.$emit('loginEvent', this.loginStatus)
        this.$emit('statusEvent', this.authStatus)
        this.$router.push({name: 'Home'})
      }).catch((error) => {
        console.log(error)
      });// User that was authenticated
    }
  }
}
</script>

<style scoped>

</style>