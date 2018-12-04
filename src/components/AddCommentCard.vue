<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-text-field
          v-model="comment"
          outline
          clearable
          label="Message"
          type="text"
          :error-messages="commentErrors"
      >
        <v-btn
          slot="append-outer"
          @click.native="handleAdd"
        >
          Add
        </v-btn>
      </v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    name: 'AddCommentCard',
    validations: {
      comment: { required },
    },
    props: {
      callback: {
        type: Function,
        required: true,
      }
    },
    data: () => ({
      comment: '',
    }),
    methods: {
      handleAdd() {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          this.callback(this.comment);
          this.clear();
        }
      },
      clear() {
        this.comment = '';
        this.$v.$reset();
      },
    },
    computed: {
      commentErrors() {
        const errors = [];
        if (!this.$v.comment.$dirty) return errors;
        !this.$v.comment.required && errors.push('Comment is required.');
        return errors;
      },
    },
  };
</script>

<style>

</style>
