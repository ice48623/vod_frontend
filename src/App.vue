<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Hello : </span>
        <span v-if="is_logged_in">{{ username }}</span>
        <span v-if="!is_logged_in">guest</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon
          @click.native="go('/upload')"
        >cloud_upload</v-icon>
      </v-btn>
      <v-btn
        @click.native="logout"
        v-if="is_logged_in"
      >
        Logout
      </v-btn>
      <v-btn
          @click.native="login"
          v-if="!is_logged_in"
      >
        Login
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
      <popup></popup>
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Popup from '@/components/Popup.vue';

  export default {
    name: 'App',
    components: {
      Popup,
    },
    methods: {
      go(url) {
        this.$router.push(url);
      },
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/');
      },
      login() {
        this.$router.push('/login');
      },
    },
    computed: {
      ...mapGetters([
        'is_logged_in',
        'username',
      ])
    }
  }
</script>
