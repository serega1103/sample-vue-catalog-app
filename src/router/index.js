import Vue from 'vue';
import VueRouter from 'vue-router';

import ListView from '../views/ListView.vue';
import CardsView from '../views/CardsView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ListView',
    component: ListView,
  },
  {
    path: '/cards',
    name: 'CardsView',
    component: CardsView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
