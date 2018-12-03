<template>
  <v-container>
    <p class="headline font-weight-medium"> {{ name }} </p>
    <video-player :options="videoOptions" ref="videoPlayer"></video-player>

    <div class="comment-section">
      <div class="comment-header">
        <span class="headline font-weight-medium">Comments</span>
        <span class="like-section">
          <v-btn
              icon
              v-if="!likes.is_like"
              @click.native="handleLike"
          >
            <v-icon>favorite_border</v-icon>
          </v-btn>
          <v-btn
              icon
              v-if="likes.is_like"
              @click.native="handleLike"
          >
            <v-icon color="red">favorite</v-icon>
          </v-btn>
          {{ likes.amount }}
        </span>
      </div>
      <comment-card
          v-for="c in comments"
          :username="c.uid"
          :comment="c.comment"
          :key="c.uid"
      ></comment-card>
    </div>
  </v-container>
</template>

<script>
  import CommentCard from '@/components/CommentCard';
  import api from '@/services/api';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Watch',
    components: {
      CommentCard,
    },
    data() {
      return {
        name: 'Demo Video',
        liked: false,
        video_id: '',
        filename: '',
        likes: {},
        videoOptions: {
          height: 640,
          source: [],
          playbackRates: [0.7, 1.0, 1.3, 1.5, 1.7],
          poster: '',
          defaultSrcReId: 2
        },
        comments: [],
      }
    },
    methods: {
      initialize() {
        this.video_id = this.$route.params.video_id;
        this.getVideoDetail(this.video_id);
      },
      getVideoDetail(video_id) {
        api.getVideoDetail(video_id, this.uid)
          .then(res => {
            console.log(res);
            const data = res.data;
            if (!data.success) {
              console.log(data.error);
              return
            }
            const resData = data.data;
            this.comments = resData.comments;
            this.filename = resData.filename;
            this.videoOptions.poster = resData.img;
            this.likes = resData.likes;
            this.videoOptions.source = resData.source;
            console.log(this.videoOptions.source);
            this.player.updateSrc(resData.source);
          })
          .catch(err => {
            console.log(err);
          });
      },
      handleLike() {
        if (!this.likes.is_like) {
          api.like(this.video_id, this.uid);
          this.likes.amount = this.likes.amount + 1;
          this.likes.is_like = true;
        } else {
          api.unlike(this.video_id, this.uid);
          this.likes.amount = this.likes.amount - 1;
          this.likes.is_like = false;
        }
      },
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      },
      ...mapGetters([
        'uid',
      ])
    },
    mounted() {
      this.initialize();
    },
  }
</script>

<style>
  .comment-section {
    margin-top: 30px;
  }

  .like-section {
    margin-left: 10px;
  }

  .comment-header {
    margin-bottom: 20px;
  }
</style>
