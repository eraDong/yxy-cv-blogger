import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomePage/HomePage.vue')
    },
    {
      path: '/home',
      redirect: '/collection',
      component: () => import('@/views/LayoutContainer/LayoutContainer.vue'),
      children: [
        {
          path: '/collection',
          component: () => import('@/views/CollectionPage/CollectionPage.vue')
        },
        {
          path: '/product',
          component: () => import('@/views/ProductPage/ProductPage.vue')
        },
        {
          path:'/community',
          component: () => import('@/views/CommunityPage/CommunityPage.vue')
        }
      ]
    }
  ]
})

export default router
