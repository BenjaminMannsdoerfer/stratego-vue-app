<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Change Email</div>
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
                    v-model="newEmail"
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
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        type="submit"
                        color="rgba(192,141,43,255)"
                        class="btn btn-primary mr-10"
                        v-bind="attrs"
                        v-on="on"
                    >
                      Change Email
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Authenticate with old Email and Password</span>
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
                          @click="reauthenticateChangeEmail()"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </div>
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
  name: "ChangeEmail",
  data() {
    return {
      newEmail: '',
      userEmail: '',
      userPassword: '',
      dialog: false,
      snackbarText: 'Email successful changed',
      snackbar: false,
      authStatus: 'account'
    }
  },
  methods: {
    reauthenticateChangeEmail() {
      /* // encode as UTF-8
      const msgBuffer = new TextEncoder().encode(this.userPassword);
      // hash the message
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      // convert ArrayBuffer to Array
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      // convert bytes to hex string
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');*/
      this.dialog = false
      const user = firebaseAuth.getAuth().currentUser;
      const credential = firebaseAuth.EmailAuthProvider.credential(
          this.userEmail,
          this.userPassword
          //hashHex
      );
      firebaseAuth.reauthenticateWithCredential(user, credential);
      firebaseAuth.updateEmail(firebaseAuth.getAuth().currentUser, this.newEmail)
      this.snackbar = true
    },
    back() {
      this.$emit('statusEvent', this.authStatus)
    },
  }
}
</script>

<style scoped>

</style>