<template>
  <div class="backgroundd">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Change Password</div>
          <div class="card-body">
            <div class="form-group row">
              <label for="newPassword" class="col-md-4 col-form-label text-md-right align-self-center">New
                password</label>
              <div class="col-md-6">
                <input
                    id="newPassword"
                    type="password"
                    class="form-control input-field"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="newPassword"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="repeatPassword" class="col-md-4 col-form-label text-md-right align-self-center">Repeat
                password</label>
              <div class="col-md-6">
                <input
                    id="repeatPassword"
                    type="password"
                    class="form-control input-field"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="repeatPassword"
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
                        class="btn btn-primary"
                        v-bind="attrs"
                        v-on="on"
                    >Continue
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Authenticate with Email and old Password</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                                label="Email*"
                                required
                                v-model="email"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                                label="Password*"
                                type="password"
                                required
                                v-model="password"
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
                          @click="reauthenticate(dialog)"
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
  name: "ChangePassword",
  data() {
    return {
      email: '',
      password: '',
      newPassword: '',
      repeatPassword: '',
      authStatus: 'account',
      snackbar: false,
      snackbarText: 'Password successful changed',
      dialog: false
    }
  },
  methods: {
    back() {
      this.$emit('statusEvent', this.authStatus)
    },
    async changePassword() {
      let user = await firebaseAuth.getAuth().currentUser;
      await firebaseAuth.updatePassword(user, this.newPassword).then(() => {
      }).catch((error) => {
        console.log(error)
      });
      this.snackbar = true
    },
    async reauthenticate() {
      this.dialog = false
      const user = await firebaseAuth.getAuth().currentUser;
      const credential = await firebaseAuth.EmailAuthProvider.credential(
          this.email,
          this.password
      );
      await firebaseAuth.reauthenticateWithCredential(user, credential);
      await this.changePassword()
    }
  }
}
</script>

<style scoped>

</style>