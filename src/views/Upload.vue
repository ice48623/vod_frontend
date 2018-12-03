<template>
  <v-container>
    <uploader
      ref="videoUploader"
      :callback="onVideoChange"
      :accept="'video/*'"
    ></uploader>
    <form>
      <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="25"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
      ></v-text-field>
      <v-layout row justify-center>
        <v-btn @click.native="clear">clear</v-btn>
        <v-btn @click.native="submit">upload</v-btn>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
  import Uploader from '@/components/Uploader';
  import { validationMixin } from 'vuelidate';
  import { required, maxLength } from 'vuelidate/lib/validators';
  import api from '@/services/api';

  export default {
    name: 'Upload',
    components: {
      Uploader,
    },
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(25) },
    },
    data: () => ({
      name: '',
      videos: [],
      uid: '',
    }),
    computed: {
      nameErrors () {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.maxLength && errors.push('Name must be at most 25 characters long');
        !this.$v.name.required && errors.push('Name is required.');
        return errors
      },
    },
    methods: {
      submit() {
        this.$v.$touch();
        Array.from(Array(this.videos.length).keys()).map( x => {
          api.upload(this.videos[x], this.name, this.uid)
            .then(res => {
              this.clear();
              this.$router.push('/home')
            })
            .catch(err => {
              this.clear();
              this.$router.push('/home')
            })
        });
      },
      clear() {
        this.$v.$reset();
        this.name = '';
        this.$refs.videoUploader.reset();
      },
      onVideoChange(videos) {
        this.videos = videos;
      },
    }
  };
</script>

<style>

</style>
