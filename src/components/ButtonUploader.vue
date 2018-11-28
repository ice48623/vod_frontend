<template>
  <div>
    <h3>Thumbnail</h3>
    <v-layout row align-center>

      <input type="file"
             @change="handleFileChange"
             :accept="accept"
      >
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'ButtonUploader',
    props: {
      callback: {
        type: Function,
        required: true
      },
      accept: {
        type: String,
        required: true
      }
    },
    methods: {
      handleFileChange() {
        const files = event.target.files;
        if (!files.length) return;
        this.callback(files);
      },
    },
  };
</script>

<style>

</style>
