<template>
  <v-container fluid grid-list-lg justify-center>
    <v-layout row wrap>
      <v-flex
          v-for="v in videos"
          :key="v.video_id"
          v-if="!isVideoEmpty"
          xs3
      >
        <thumbnail-card
          :id="v.video_id"
          :title="v.name"
          :src="v.img"
          :likes="v.likes"
          :comments="v.comments"
          :callback="go"
        ></thumbnail-card>
      </v-flex>
      <v-flex
          v-if="isVideoEmpty"
      >
        <p>No available video, please upload</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ThumbnailCard from '@/components/ThumbnailCard';
  import api from '@/services/api';

  export default {
    name: 'Home',
    components: {
      ThumbnailCard
    },
    data() {
      return {
        videos: [],
      };
    },
    methods: {
      go(video_id) {
        this.$router.push('/watch/' + video_id);
      },
      getVideos() {
        api.getAllVideo()
          .then(res => {
            this.videos = res.data.data;
          })
          .catch(() => {
            this.$store.dispatch('openPopup', {title: 'Unable to fetch video', message: 'Please try again'})
          })
      },
    },
    computed: {
      isVideoEmpty() {
        return this.videos.length === 0;
      },
    },
    mounted() {
      this.getVideos();
    },
  }
</script>
