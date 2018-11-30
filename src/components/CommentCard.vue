<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ username }}</h3>
            <div>{{ comment }}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'CommentCard',
    props: {
      username: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
    },
  };
</script>

<style>

</style>
