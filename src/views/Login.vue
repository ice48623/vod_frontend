<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs3>

        <v-tabs centered
                color="cyan"
                v-model="model"
                slider-color="primary"
        >
          <v-tab :href="'#tab-login'">Login</v-tab>
          <v-tab :href="'#tab-register'">Register</v-tab>
        </v-tabs>

        <v-tabs-items v-model="model">
          <v-tab-item
            :value="'tab-login'"
          >
            <login-form></login-form>
          </v-tab-item>
          <v-tab-item
              :value="'tab-register'"
          >
            <register-form></register-form>
          </v-tab-item>
        </v-tabs-items>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import LoginForm from '@/components/LoginForm';
  import RegisterForm from '@/components/RegisterForm';

  export default {
    name: 'Login',
    components: {
      LoginForm,
      RegisterForm,
    },
    data: () => ({
      model: 'tab-login',
    })
  };
</script>
