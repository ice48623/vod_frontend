<template>
  <v-container fluid grid-list-lg justify-center>
    <v-layout row wrap>
      <v-flex v-for="v in videos" :key="v.video_id" xs3>
        <thumbnail-card
          :id="v.video_id"
          :title="v.name"
          :src="v.img"
          :likes="v.likes"
          :comments="v.comments"
          :callback="go"
        ></thumbnail-card>
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
          .catch(err => {
            console.log(err);
          })
      },
    },
    mounted() {
      this.getVideos();
    },
  }
</script>
