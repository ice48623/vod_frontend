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
      <add-comment-card
        :callback="handleAddComment"
        ref="addComment"
      ></add-comment-card>
      <comment-card
          v-for="(c, index) in comments"
          :username="c.uid"
          :comment="c.comment"
          :key="index"
      ></comment-card>
    </div>
  </v-container>
</template>

<script>
  import CommentCard from '@/components/CommentCard';
  import AddCommentCard from '@/components/AddCommentCard';
  import api from '@/services/api';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Watch',
    components: {
      CommentCard,
      AddCommentCard,
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
            this.player.updateSrc(resData.source);
          })
          .catch(() => {
            this.$store.dispatch('openPopup', {title: 'Unable to fetch video', message: 'Please try again later'});
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
      handleAddComment(comment) {
        api.addComment(this.video_id, this.uid, comment)
          .then(({data}) => {
            if (!data.success) {
              this.$store.dispatch('openPopup', {title: 'Add Comment Failed', message: data.error});
              return
            }
            this.getComment();
          })
          .catch(() => {
            this.$refs.addComment.clear();
            this.$store.dispatch('openPopup', {title: 'Add Comment Failed', message: 'Please try again'});
          });
      },
      getComment() {
        api.getComment(this.video_id)
          .then(({data}) => {
            if (!data.success) {
              this.$store.dispatch('openPopup', {title: 'Add Comment Failed', message: data.error});
              return
            }
            this.comments = data.data.comments;
          })
          .catch(() => {
            this.$store.dispatch('openPopup', {title: 'Unable to fetch comment', message: 'Please try again later'});
          })
      }
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
      console.log(this.uid)
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
