<template>
  <div>
    <v-card>
      <v-layout justify-center>
        <v-form class="form">
          <v-flex xs12 text-xs-center>
            <p class="display-1">Register</p>
            <v-text-field
                v-model="username"
                :error-messages="usernameErrors"
                label="Username"
                required
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                type="password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="confirmPassword"
                :error-messages="confirmPasswordErrors"
                label="Confirm Password"
                type="password"
                required
                @input="$v.confirmPassword.$touch()"
                @blur="$v.confirmPassword.$touch()"
            ></v-text-field>
            <v-btn
                class="primary"
                @click.native="submit"
            >
              Register
            </v-btn>
          </v-flex>
        </v-form>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength, sameAs } from 'vuelidate/lib/validators'
  import api from '@/services/api';

  export default {
    mixins: [validationMixin],
    name: 'RegisterForm',
    validations: {
      username: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
    },
    data: () => ({
      username: '',
      password: '',
      confirmPassword: '',
    }),
    computed: {
      usernameErrors () {
        const errors = [];
        if (!this.$v.username.$dirty) return errors;
        !this.$v.username.required && errors.push('Username is required.');
        return errors;
      },
      passwordErrors () {
        const errors = [];
        if (!this.$v.password.$dirty) return errors;
        !this.$v.password.minLength && errors.push('Password must be at least 6 characters long');
        !this.$v.password.required && errors.push('Password is required');
        return errors;
      },
      confirmPasswordErrors () {
        const errors = [];
        if (!this.$v.confirmPassword.$dirty) return errors;
        !this.$v.confirmPassword.sameAsPassword && errors.push('Must be the same as `password`');
        !this.$v.confirmPassword.required && errors.push('Password is required');
        return errors;
      }
    },
    methods: {
      submit() {
        this.$v.$touch();
        api.register(this.username, this.password)
          .then(({data}) => {
            if (!data.success) {
              this.$store.dispatch('openPopup', {title: 'Register Failed', message: res.error});
              return
            }
            this.$store.dispatch('register', data.data);
            this.$router.push('/home')
          })
          .catch(() => {
            this.$store.dispatch('openPopup', {title: 'Register Failed', message: 'Please try again'});
          });
        this.clear();
      },
      clear() {
        this.$v.$reset();
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
      },
    }
  };
</script>

<style scoped>
  .form {
    width: 90%;
    padding: 30px;
  }
</style>
