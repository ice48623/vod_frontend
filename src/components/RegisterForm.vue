<template>
  <div>
    <v-card>
      <v-layout justify-center>
        <v-form class="form">
          <v-flex xs12 text-xs-center>
            <p class="display-1">Register</p>
            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="confirmPassword"
                :error-messages="confirmPasswordErrors"
                label="Confirm Password"
                required
                @input="$v.confirmPassword.$touch()"
                @blur="$v.confirmPassword.$touch()"
            ></v-text-field>
            <v-btn
                class="primary"
                @click.native="register"
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
      name: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
    },
    data: () => ({
      name: '',
      password: '',
      confirmPassword: '',
    }),
    computed: {
      nameErrors () {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.required && errors.push('Name is required.');
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
        this.$v.$touch()
      },
      clear() {
        this.$v.$reset();
        this.name = '';
        this.password = '';
        this.confirmPassword = '';
      },
      register() {
        api.register(this.username, this.password)
          .then(res => {
            const data = res.data;
            if (!data.success) {
              console.log(data.error);
              return
            }
            // keep user in index here
            this.$router.push('/home')
          })
          .catch(err => {
            console.log(err);
          });

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
