<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    data () {
      return {
        items: [
          {
            src: 'https://media.giphy.com/media/20k1punZ5bpmM/giphy.gif'
          },
          {
            src: "https://media.giphy.com/media/z6TMaaNJKIAX6/giphy.gif"
          },
          {
            src: 'https://media.giphy.com/media/AAsYtcC8UPoly/giphy.gif'
          },
          {
            src: 'https://media.giphy.com/media/qrwthQPPQrtEk/giphy.gif'
          }
        ]
      }
    }
}
</script>

<style>

</style>

