<template>
  <v-container>
    <uploader
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
      <button-uploader
        :callback="onImgChange"
        :accept="'image/jpeg'"
      ></button-uploader>
      <v-layout row justify-center>
        <v-btn @click="clear">clear</v-btn>
        <v-btn @click="submit">upload</v-btn>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
  import Uploader from '@/components/Uploader';
  import ButtonUploader from "@/components/ButtonUploader";
  import { validationMixin } from 'vuelidate';
  import { required, maxLength } from 'vuelidate/lib/validators';
  import api from '@/services/api';

  export default {
    name: 'Upload',
    components: {
      Uploader,
      ButtonUploader,
    },
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(25) },
    },
    data: () => ({
      name: '',
      videos: [],
      img: '',
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
        this.videos.forEach((file) => {
          api.upload(file, this.img, this.name, this.uid);
        });
      },
      clear() {
        this.$v.$reset();
        this.name = '';
      },
      onVideoChange(videos) {
        this.videos = videos;
      },
      onImgChange(img) {
        this.img = img;
      },
    }
  };
</script>

<style>

</style>
