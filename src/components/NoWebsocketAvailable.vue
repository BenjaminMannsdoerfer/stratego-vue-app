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
          <h2>
            <pre>{{ "You are offline.\nPlease connect your device\nwith the internet and\nrefresh the page." }}</pre>
          </h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
            style="text-align: center"
            cols="12"
            sm="6"
            md="4"
        >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "NoWebsocketAvailable"
}
</script>

<style scoped>

</style>