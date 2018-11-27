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

  export default {
    name: 'Home',
    components: {
      ThumbnailCard
    },
    data() {
      return {
        videos: [
          {
            name: 'Demo Video',
            video_id: 'asdfjklsadfj',
            uid: 'ajslfkdj',
            img: 'https://picsum.photos/500/300?image=1',
            likes: 10,
            comments: 15,
          },
          {
            name: 'Demo Video',
            video_id: 'asdfjklsadfj',
            uid: 'ajslfkdj',
            img: 'https://picsum.photos/500/300?image=2',
            likes: 10,
            comments: 15,
          },
          {
            name: 'Demo Video',
            video_id: 'asdfjklsadfj',
            uid: 'ajslfkdj',
            img: 'https://picsum.photos/500/300?image=3',
            likes: 10,
            comments: 15,
          },
          {
            name: 'Demo Video',
            video_id: 'asdfjklsadfj',
            uid: 'ajslfkdj',
            img: 'https://picsum.photos/500/300?image=4',
            likes: 10,
            comments: 15,
          },
          {
            name: 'Demo Video',
            video_id: 'asdfjklsadfj',
            uid: 'ajslfkdj',
            img: 'https://picsum.photos/500/300?image=5',
            likes: 10,
            comments: 15,
          },
          {
            name: 'Demo Video',
            video_id: 'asdfjklsadfj',
            uid: 'ajslfkdj',
            img: 'https://picsum.photos/500/300?image=6',
            likes: 10,
            comments: 15,
          },
        ]
      };
    },
    methods: {
      go(video_id) {
        console.log(video_id);
        this.$router.push('/watch/' + video_id);
      },
    },
  }
</script>
