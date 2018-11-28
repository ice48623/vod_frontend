<template>
  <v-container>
    <h3>Vue Video.js Live Demo</h3>
    <!--<video-player class="vjs-sublime-skin" ref="videoPlayer" :options="playerOptions" @ready="onPlayerReadied" @timeupdate="onTimeupdate">-->
    <!--</video-player>-->
    <video red="videoPlayer" class="video-js vjs-fluid" controls preload="auto" width="640" height="264" poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?3016dc" data-setup='{}'>
      <source src="http://68.183.230.156:3030/hls/sample_1.mp4,.urlset/master.m3u8" type="application/x-mpegURL">
    </video>
  </v-container>
</template>

<script>
  import 'video.js/dist/video-js.css'
  import '../assets/styles/youtube.css'

  export default {
    name: 'Watch',
    components: {
    },
    data() {
      return {
        initialized: false,
        currentTech: 'Html5',
        playerOptions: {
          height: '360',
          width: '640',
          overNative: true,
          autoplay: true,
          controls: true,
          techOrder: ['html5'],
          sourceOrder: true,
          html5: { hls: { withCredentials: false } },
          sources: [
            {
              withCredentials: false,
              type: 'application/x-mpegURL',
              src: 'http://68.183.230.156:3030/hls/sample_1.mp4,.urlset/master.m3u8'
            }
          ],
          poster: 'src/assets/logo.png'
        }
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      },
    },
    methods: {
      onPlayerReadied() {
        if (!this.initialized) {
          this.initialized = true;
        }
      },
      // record current time
      onTimeupdate(e) {
        console.log('currentTime', e.cache_.currentTime)
      },
    }
  }
</script>

<style>
</style>
