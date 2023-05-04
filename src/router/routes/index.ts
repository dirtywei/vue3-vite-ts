import type { RouteType, RoutesType } from '~/typings/router'

export * from './modules'

export const basicRoutes: RoutesType = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    isHidden: true
  },
  {
    path: '',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/views/login/index.vue')
  }
]

export const NOT_FOUND_ROUTE: RouteType = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true
}
