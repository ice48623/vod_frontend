<template>
  <v-card
    @click.native="handleClick"
  >
    <v-img
        :src="src"
        aspect-ratio="1.7778"
    ></v-img>
    <v-card-actions class="actions">
      {{ title }}
      <v-spacer></v-spacer>

      <div class="icon">
        <v-badge
            overlap
            color="orange"
        >
          <span slot="badge">6</span>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
        </v-badge>
      </div>

      <div class="icon">
        <v-badge
            overlap
            color="orange"
        >
          <span slot="badge">6</span>
          <v-btn icon>
            <v-icon>comment</v-icon>
          </v-btn>
        </v-badge>
      </div>
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
  .actions {
    padding: 10px 20px 10px 20px;
  }
  .icon {
    margin: 0 2px;
  }
</style>
