import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router.js'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import './assets/styles/vsg-skin.css'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'

Vue.use(Vuetify, {
    iconfont: 'md',
});
Vue.config.productionTip = false;
Vue.use(VueVideoPlayer);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
