import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router.js'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import videoPlayer from 'vue-video-player/index'

videoPlayer.config({
  youtube: true,
  switcher: true,
  hls: true
});
// use
Vue.use(videoPlayer);

Vue.use(Vuetify, {
    iconfont: 'md',
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
