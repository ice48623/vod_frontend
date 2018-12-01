import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Live from '@/views/live.vue'
import Watch from '@/views/Watch.vue';
import Upload from '@/views/Upload.vue';
import Login from '@/views/Login.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    },
    {
      path: '/',
      name: 'login',
      component: Login
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
