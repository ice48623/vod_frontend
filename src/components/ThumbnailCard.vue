<template>
  <v-card
    @click.native="handleClick"
  >
    <v-img
        :src="src"
        aspect-ratio="1.7778"
    ></v-img>
    <v-card-text>
      <p>{{ title }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'ThumbnailCard',
    props: {
      callback: {
        type: Function,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      likes: {
        type: Number,
        default: 0,
      },
      comments: {
        type: Number,
        default: 0,
      },
      id: {
        type: String,
        required: true,
      }
    },
    methods: {
      handleClick() {
        this.callback(this.id);
      }
    }
  };
</script>

<style>

</style>
