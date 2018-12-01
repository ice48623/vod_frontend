<template>
  <div>
    <v-card>
      <v-layout justify-center>
        <v-form class="form">
          <v-flex xs12 text-xs-center>
            <p class="display-1">Login</p>
            <v-text-field
                v-model="username"
                :error-messages="usernameErrors"
                label="Name"
                required
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
            ></v-text-field>
            <v-btn
                class="primary"
                @click.native="login"
            >
              Login
            </v-btn>
          </v-flex>
        </v-form>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    name: 'LoginForm',
    validations: {
      username: { required },
      password: { required, minLength: minLength(6) },
    },
    data:() => ({
      username: '',
      password: '',
    }),
    computed: {
      usernameErrors() {
        const errors = [];
        if (!this.$v.username.$dirty) return errors;
        !this.$v.username.required && errors.push('Username is required.');
        return errors;
      },
      passwordErrors() {
        const errors = [];
        if (!this.$v.password.$dirty) return errors;
        !this.$v.password.minLength && errors.push('Password must be at least 6 characters long');
        !this.$v.password.required && errors.push('Password is required');
        return errors;
      }
    },
    methods: {
      submit() {
        this.$v.$touch();
        this.login();
        this.clear();
      },
      clear() {
        this.$v.$reset();
        this.username = '';
        this.password = '';
      },
      login() {
        this.$store.dispatch('login', {username: this.username, password: this.password})
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
