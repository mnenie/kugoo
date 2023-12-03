import { ABOUT_ROUTE, BASKET_ROUTE, BLOG_ROUTE, CATALOG_ROUTE, COMPARISON_ROUTE, CONTACTS_ROUTE, COOPERATION_ROUTE, DELIVERY_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE, NOT_FOUND_ROUTE, PRODUCT_ROUTE, SERVICE_ROUTE, STOCKS_ROUTE, TEST_ROUTE, THANKS_ROUTE } from '@/utils/consts'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_ROUTE,
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: SERVICE_ROUTE,
      name: 'service',
      component: () => import('@/views/ServicePage.vue')
    },
    {
      path: COOPERATION_ROUTE,
      name: 'cooperation',
      component: () => import('@/views/CooperationPage.vue')
    },
    {
      path: ABOUT_ROUTE,
      name: 'about',
      component: () => import('@/views/AboutPage.vue')
    },
    {
      path: DELIVERY_ROUTE,
      name: 'delivery',
      component: () => import('@/views/DeliveryPage.vue')
    },
    {
      path: TEST_ROUTE,
      name: 'testdrive',
      component: () => import('@/views/TestDrivePage.vue')
    },
    {
      path: BLOG_ROUTE,
      name: 'blog',
      component: () => import('@/views/BlogPage.vue')
    },
    {
      path: CONTACTS_ROUTE,
      name: 'contacts',
      component: () => import('@/views/ContactsPage.vue')
    },
    {
      path: STOCKS_ROUTE,
      name: 'stocks',
      component: () => import('@/views/StocksPage.vue')
    },
    {
      path: CATALOG_ROUTE,
      name: 'catalog',
      component: () => import('@/views/CatalogPage.vue')
    },
    {
      path: PRODUCT_ROUTE,
      name: 'product',
      component: () => import('@/views/ProductPage.vue')
    },
    {
      path: BASKET_ROUTE,
      name: 'basket',
      component: () => import('@/views/BasketPage.vue')
    },
    {
      path: FAVOURITES_ROUTE,
      name: 'favourites',
      component: () => import('@/views/FavouritesPage.vue')
    },
    {
      path: COMPARISON_ROUTE,
      name: 'comparison',
      component: () => import('@/views/ComparisonPage.vue')
    },
    {
      path: '/thanks/:id',
      name: 'thanks',
      component: () => import('@/views/ThanksPage.vue')
    },
    {
      path: NOT_FOUND_ROUTE,
      name: 'notfound',
      component: () => import('@/views/NotFoundPage.vue')
    }
  ]
})

export default router
