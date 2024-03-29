import { MainPage } from 'src/pages/main-page';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/:category',
    component: () => import('src/pages/category-page/ui/category-page.vue'),
    name: 'categoryPage',
  },
  {
    path: '/:category/:product',
    component: () => import('src/pages/product-page/ui/product-page.vue'),
    name: 'productPage',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
