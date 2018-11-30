<template>
  <div>
    <h3>Thumbnail</h3>
    <v-layout row align-center>
      <form enctype="multipart/form-data" novalidate>
        <input type="file"
               @change="handleFileChange"
               :accept="accept"
               ref="imgInput"
        >
      </form>
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
      reset() {
        this.$refs.imgInput.value = '';
      },
    },
  };
</script>

<style>

</style>
