<template>
  <v-layout row justify-center>
    <v-dialog v-model="popup.dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{ popup.title }}</v-card-title>
        <v-card-text>{{ popup.message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="closeModal">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Popup',
    computed: {
      ...mapGetters(['popup']),
    },
    methods: {
      closeModal() {
        this.$store.dispatch('closePopup');
      },
    },
  };
</script>

<style>
</style>
