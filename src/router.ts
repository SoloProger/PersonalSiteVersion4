import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./pages/main-page.vue'),
  },
  {
    path: '/portfolio',
    component: () => import('./pages/portfolio-page.vue'),
  },
  {
    path: '/about',
    component: () => import('./pages/about-page.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
