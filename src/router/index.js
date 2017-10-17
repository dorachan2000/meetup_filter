import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';
import Filter from '@/components/Filter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter,
    },
  ],
});
