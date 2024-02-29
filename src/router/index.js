// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/front/HomeView.vue'),
        meta: {
          title: 'Sneaker',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/front/RegisterView.vue'),
        meta: {
          title: 'Sneaker | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/front/LoginView.vue'),
        meta: {
          title: 'Sneaker | 登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'products',
        component: () => import('@/views/front/ProductsView.vue'),
        children: [
          {
            path: 'new',
            name: 'New',
            component: () => import('@/views/products/NewView.vue'),
            meta: {
              title: 'Sneaker | 當月新品',
              login: false,
              admin: false
            }
          },
          {
            path: 'nike',
            name: 'Nike',
            component: () => import('@/views/products/NikeView.vue'),
            meta: {
              title: 'Sneaker | Nike',
              login: false,
              admin: false
            }
          },
          {
            path: 'newbalance',
            name: 'New Balance',
            component: () => import('@/views/products/NewbalanceView.vue'),
            meta: {
              title: 'Sneaker | New Balance',
              login: false,
              admin: false
            }
          },
          {
            path: 'products/:id',
            name: 'product',
            component: () => import('@/views/products/ProductView.vue'),
            meta: {
              title: 'Sneaker | 商品',
              login: false,
              admin: false
            }
          }
        ]
      },
      {
        path: 'productsExchange',
        component: () => import('@/views/front/productsExchangeView.vue'),
        children: [
          {
            path: 'newExchange',
            name: 'new',
            component: () => import('@/views/productsExchange/NewView.vue'),
            meta: {
              title: 'Sneaker | 當月新品 - 交流專區',
              login: false,
              admin: false
            }
          },
          {
            path: 'nikeExchange',
            name: 'nike',
            component: () => import('@/views/productsExchange/NikeView.vue'),
            meta: {
              title: 'Sneaker | Nike - 交流專區',
              login: false,
              admin: false
            }
          },
          {
            path: 'newbalanceExchange',
            name: 'newbalance',
            component: () => import('@/views/productsExchange/NewbalanceView.vue'),
            meta: {
              title: 'Sneaker | New Balance - 交流專區',
              login: false,
              admin: false
            }
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('@/views/admin/ProductsView.vue'),
        meta: {
          title: 'Sneaker | 商品管理',
          login: true,
          adime: true
        }
      },
      {
        path: 'exchange',
        name: 'AdminExchange',
        component: () => import('@/views/admin/ExchangeView.vue'),
        meta: {
          title: 'Sneaker | 交流區管理',
          login: true,
          adime: true
        }
      },
      {
        path: 'members',
        name: 'AdminMembers',
        component: () => import('@/views/admin/MembersView.vue'),
        meta: {
          title: 'Sneaker | 會員管理',
          login: true,
          adime: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()

  if (from === START_LOCATION) {
    await user.getProfile()
  }

  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
    // 如果有登入，要去註冊或登入頁，重新導向回首頁
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // 如果要去的頁面要登入但沒登入，重新導向回登入頁
    next('login')
  } else {
    // 不重新導向
    next()
  }
})

export default router
