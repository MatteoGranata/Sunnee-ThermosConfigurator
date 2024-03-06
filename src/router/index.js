import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Config from '../views/Config.vue';
import Step1 from '../views/Step1.vue';
import Step2 from '../views/Step2.vue';
import Step3 from '../views/Step3.vue';
import Thanks from '../views/Thanks.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/config',
      name: 'config',
      component: Config,
      children: [
        {
          path: '/step1',
          name: 'step1',
          component: Step1
        },
        {
          path: '/step2',
          name: 'step2',
          component: Step2
        },
        {
          path: '/step3',
          name: 'step3',
          component: Step3
        },

      ]
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks,
    },
    {
      path: '/',
      component: Welcome
    },
  ]
})

export default router
