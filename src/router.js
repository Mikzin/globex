import { createRouter, createWebHistory } from 'vue-router';

import BaseSearch from './components/UI/BaseSearch.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseModal from './components/UI/BaseModal.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      components: { BaseSearch, BaseCard, BaseModal },
      props: true,
    },
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
  history: createWebHistory(),
});

export default router;
