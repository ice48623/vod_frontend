import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#E53935', // #E53935
    secondary: '#FFCDD2', // #FFCDD2
    accent: '#3F51B5' // #3F51B5
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
