<template>
  <v-app dark>
    <v-toolbar app v-if="is_logged_in">
      <v-toolbar-title class="headline text-uppercase">
        <span>Hello : </span>
        <span>{{ username }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon
          @click.native="go('/upload')"
        >cloud_upload</v-icon>
      </v-btn>
      <v-btn
        @click.native="logout"
      >
        Logout
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
    },
    computed: {
      ...mapGetters([
        'is_logged_in',
        'username',
      ])
    }
  }
</script>
