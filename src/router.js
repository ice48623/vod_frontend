import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Live from '@/views/live.vue'

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
    }
  ]
});

export default router
