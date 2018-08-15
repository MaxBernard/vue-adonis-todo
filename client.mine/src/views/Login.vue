<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4>
        <h1>Login</h1>

        <v-text-field
          label="Email"
          placeholder="Email"
          :value="loginEmail"
          @input="setLoginEmail"
        ></v-text-field>

        <v-text-field
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
          :value="loginPassword"
          @input="setLoginPassword"
        ></v-text-field>

        <v-btn color="green" dark @click="login">
          <v-icon class="mr-2">fingerprint</v-icon>
          Login
        </v-btn>

        <v-alert type="error" :value="loginError">
          {{loginError}}
        </v-alert>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', [
      'loginEmail',
      'loginPassword',
      'loginError',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setLoginEmail',
      'setLoginPassword',
    ]),
    ...mapActions('authentication', [
      'login',
    ]),
  },
};
</script>

<style>

</style>
