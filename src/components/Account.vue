<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Account</div>
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
                  <v-row justify="center">
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
                              @click="deleteAccount()"
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
      email: this.$store.getters.user.email,
      userEmail: '',
      userPassword: '',
      dialog: false
    }
  },
  methods: {
    changeEmail() {

    },
    changePassword() {
      this.loginStatus = 'changePassword'
      this.$emit('statusEvent', this.loginStatus)
    },
    reauthenticate() {
      this.dialog = false
      const user = firebaseAuth.getAuth().currentUser;
      const credential = firebaseAuth.EmailAuthProvider.credential(
          this.email,
          this.password
      );
      firebaseAuth.reauthenticateWithCredential(user, credential);
      this.deleteAccount()
    },
    deleteAccount() {
      const user = firebaseAuth.getAuth().currentUser;
      firebaseAuth.deleteUser(user).then(() => {
        console.log("Account deleted")
      }).catch((error) => {
        // An error ocurred
      });
    }
  }
}
</script>

<style scoped>

</style>