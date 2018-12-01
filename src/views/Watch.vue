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
              v-if="!liked"
              @click.native="handleLike"
          >
            <v-icon>favorite_border</v-icon>
          </v-btn>
          <v-btn
              icon
              v-if="liked"
              @click.native="handleLike"
          >
            <v-icon color="red">favorite</v-icon>
          </v-btn>
          {{ likes }}
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
        likes: 0,
        videoOptions: {
          height: 640,
          source: [
            {
              src: 'http://68.183.230.156:3030/hls/sample_1.mp4,.urlset/master.m3u8',
              type: 'application/x-mpegURL',
              label: '360',
              res: 360
            },
          ],
          playbackRates: [0.7, 1.0, 1.3, 1.5, 1.7],
          poster: 'http://cn.vuejs.org/images/logo.png',
          defaultSrcReId: 2
        },
        comments: [
          {
            uid: '23124324',
            comment: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
          },
          {
            uid: '1234543',
            comment: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
          },
          {
            uid: '867554',
            comment: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
          },
          {
            uid: '2343254',
            comment: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
          }
        ],
      }
    },
    methods: {
      initialize() {
        this.video_id = this.$route.params.video_id;
        this.getVideoDetail(this.video_id);
      },
      getVideoDetail(video_id) {
        api.getVideoDetail(video_id)
          .then(res => {
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
            this.videoOptions.source = resData.resolutions;
          })
          .catch(err => {
            console.log(err);
          });
      },
      handleLike() {
        if (!this.liked) {
          // api.like(this.video_id, uid);
          this.likes = this.likes + 1;
          this.liked = true;
        } else {
          // api.unlike(this.video_id, uid);
          this.likes = this.likes - 1;
          this.liked = false;
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
      // this.initialize();
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
