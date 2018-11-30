<template>
  <div id="app">
    <div class="container">
      <!--UPLOAD-->
      <form enctype="multipart/form-data" novalidate v-if="isInitial">
        <h1>Upload images</h1>
        <div class="dropbox">
          <input type="file"
                 @change="onFileChanged"
                 :accept="accept"
                 class="input-file"
                 ref="videoInput"
          >
          <p v-if="isInitial">
            Drag your file(s) here to begin<br> or click to browse
          </p>
        </div>
      </form>

      <div class="dropbox" v-if="isSaving">
        <p>{{ file }}</p>
      </div>

    </div>
  </div>
</template>

<script>
  const STATUS_INITIAL = 0, STATUS_SAVING = 1;

  export default {
    name: 'Uploader',
    props: {
      callback: {
        type: Function,
        required: true
      },
      accept: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        uploadError: '',
        currentStatus: STATUS_INITIAL,
        uploadFieldName: 'images',
        file: '',
      }
    },
    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
    },
    methods: {
      reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadError = '';
        this.file = '';
        // this.$refs.videoInput.value = '';
      },
      onFileChanged() {
        const files = event.target.files;
        if (!files.length) return;
        this.file = files[0].name;
        this.currentStatus = STATUS_SAVING;
        this.callback(files);
      },
    },
    mounted() {
      this.reset();
    },
  }
</script>

<style>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
    left: -1px;
    top: -1px;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
