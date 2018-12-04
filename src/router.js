import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Live from '@/views/live.vue'
import Watch from '@/views/Watch.vue';
import Upload from '@/views/Upload.vue';
import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound.vue';

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
      path: '/login',
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
      component: Upload,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('is_logged_in')) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  } else if (to.name === 'login') {
    if (localStorage.getItem('is_logged_in')) {
      next({
        path: from.fullPath,
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
