<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title> Title </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Home</v-btn>
          <v-btn flat>My Video</v-btn>
          <v-btn flat>Upload</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-container grid-list-xl fluid>
      <v-layout xs12 row wrap justify-center align-content-center>
        <v-flex tag="h1" class="headline" xs10>
          Highlight
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs10>
          <Carousel/>
        </v-flex>
        <v-flex tag="h2" class="headline" xs10>
          Recent Videos
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs10>
          <CardList/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="./assets/logo.png" alt="avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title> Username(?)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

import Carousel from './components/Carousel'
import CardList from './components/CardList'

export default {
  name: 'App',
  components: {Carousel, CardList},
  data () {
    return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
    }
  }
}
</script>
