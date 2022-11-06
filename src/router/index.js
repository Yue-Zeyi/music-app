import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '@/store/index.js';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/itemMusic',
    name: 'ItemMusci',
    component: () => import(/* webpackChunkName: "about" */ '../views/ItemMusci.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "search" */ '../views/Login.vue'),
  },
  {
    path: '/infouser',
    name: 'InfoUser',
    // 登录路由守卫
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin == true || store.state.token || localStorage.getItem('token')) {
        next();
      } else {
        next('/login');
      }
    },
    component: () => import(/* webpackChunkName: "search" */ '../views/InfoUser.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, form) => {
  if (to.path == '/login') {
    store.state.isFooterMusic = false;
  } else {
    store.state.isFooterMusic = true;
  }
});
export default router;
