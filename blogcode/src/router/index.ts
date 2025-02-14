import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/MainLayout.vue'),
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TTTest.vue'),
    },
    {
      path: '/filepicker',
      name: 'FilePicker',
      component: () => import('../views/file_picker/FilePicker.vue'),
    },
    {
      path: '/abc',
      name: 'abc',
      component: () => import('../views/redirect/Redirect.vue'),
    },
  ],
})

export default router
