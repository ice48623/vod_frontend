<template>
  <v-app dark>
    <v-toolbar app v-if="is_logged_in">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon
          @click.native="go('/upload')"
        >cloud_upload</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'App',
    methods: {
      go(url) {
        this.$router.push(url);
      },
    },
    computed: {
      ...mapGetters([
        'is_logged_in',
      ])
    }
  }
</script>
