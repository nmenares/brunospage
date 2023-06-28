import { createRouter, createWebHistory } from 'vue-router'
import TheWrapper from '../views/TheWrapper.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheWrapper
    }
  ]
})

export default router
