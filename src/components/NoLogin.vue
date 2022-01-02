<template>
  <v-form class="backgroundd">
    <v-container fluid>
      <v-row justify="center">
        <v-col
            style="text-align: center"
            cols="12"
            sm="6"
            md="4"
        >
          <h2><pre>{{"Welcome to Stratego\nYou are not logged in\nPlease login"}}</pre></h2>
        </v-col>
      </v-row>
      <v-row justify="center">
          <v-col
              style="text-align: center"
              cols="12"
              sm="6"
              md="4"
          >
            <button type="submit" class="btn btn-primary" @click="login()">Login</button>
          </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "NoLogin",
  methods: {
    login() {
      this.$router.push({name : 'Authentication'})
    }
  }
}
</script>

<style scoped>

</style>