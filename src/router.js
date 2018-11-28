import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Live from '@/views/live.vue'
import Watch from '@/views/Watch.vue';
import Upload from '@/views/Upload.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/watch/:video_id',
      name: 'watch',
      component: Watch
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
});

export default router
