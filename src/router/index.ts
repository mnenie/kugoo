import { ABOUT_ROUTE, AUTH_ROUTE, BASKET_ROUTE, BLOGS_ROUTE, CATALOG_ROUTE, COMPARISON_ROUTE, CONTACTS_ROUTE, COOPERATION_ROUTE, DELIVERY_ROUTE, FAVOURITES_ROUTE, HOME_ROUTE, NOT_FOUND_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SERVICE_ROUTE, STOCKS_ROUTE, TEST_ROUTE, THANKS_ROUTE, BLOG_ROUTE, PAYMENT_PAGE } from '@/utils/consts'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_ROUTE,
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: SERVICE_ROUTE,
      name: 'service',
      component: () => import('@/views/ServicePage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: COOPERATION_ROUTE,
      name: 'cooperation',
      component: () => import('@/views/CooperationPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: ABOUT_ROUTE,
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: DELIVERY_ROUTE,
      name: 'delivery',
      component: () => import('@/views/DeliveryPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: TEST_ROUTE,
      name: 'testdrive',
      component: () => import('@/views/TestDrivePage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: BLOGS_ROUTE,
      name: 'blogs',
      component: () => import('@/views/BlogsPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: CONTACTS_ROUTE,
      name: 'contacts',
      component: () => import('@/views/ContactsPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: STOCKS_ROUTE,
      name: 'stocks',
      component: () => import('@/views/StocksPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: CATALOG_ROUTE,
      name: 'catalog',
      component: () => import('@/views/CatalogPage.vue'),
      meta: {
        auth: false
      },
      children: [
        {
          path: '',
          name: 'index-catalog',
          component: () => import('@/views/CatalogMainPage.vue'),
          meta: {
            auth: false
          },
        },
        {
          path: 'scooters',
          name: 'scooters',
          component: () => import('@/views/CatalogScootersPage.vue'),
          meta: {
            auth: false
          },
        },
        {
          path: 'bikes',
          name: 'bikes',
          component: () => import('@/views/CatalogBikesPage.vue'),
          meta: {
            auth: false
          },
        },
        {
          path: 'gyroscooters',
          name: 'gyroscooters',
          component: () => import('@/views/CatalogGyroscootersPage.vue'),
          meta: {
            auth: false
          },
        },
        {
          path: 'mopeds',
          name: 'mopeds',
          component: () => import('@/views/CatalogMopedsPage.vue'),
          meta: {
            auth: false
          },
        }
      ]
    },
    {
      path: PRODUCT_ROUTE,
      name: 'product',
      component: () => import('@/views/ProductPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: BASKET_ROUTE,
      name: 'basket',
      component: () => import('@/views/BasketPage.vue'),
      children: [
        {
          path: '',
          name: 'index-basket',
          component: () => import('@/views/BasketIndexPage.vue'),
          meta: {
            auth: false
          },
        },
        
        {
          path: 'ways',
          name: 'ways',
          component: () => import('@/views/WaysPage.vue'),
          meta: {
            auth: true
          },
        },
      ]
    },
    {
      path: FAVOURITES_ROUTE,
      name: 'favourites',
      component: () => import('@/views/FavouritesPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: COMPARISON_ROUTE,
      name: 'comparison',
      component: () => import('@/views/ComparisonPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: THANKS_ROUTE,
      name: 'thanks',
      component: () => import('@/views/ThanksPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: BLOG_ROUTE,
      name: 'blog',
      component: () => import('@/views/BlogPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: REGISTRATION_ROUTE,
      name: 'registration',
      component: () => import('@/views/AuthPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: AUTH_ROUTE,
      name: 'auth',
      component: () => import('@/views/AuthPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: NOT_FOUND_ROUTE,
      name: 'notfound',
      component: () => import('@/views/NotFoundPage.vue'),
      meta: {
        auth: false
      }
    },
    {
      path: PAYMENT_PAGE,
      name: 'payment',
      component: () => import('@/views/PaymentPage.vue'),
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')

  if (to.meta.auth && !token) {
    next(AUTH_ROUTE)
  } else {
    next()
  }
})

export default router
