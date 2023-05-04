import type { RouteType } from '~/typings/router'

export default {
  path: '/component',
  name: 'Component',
  meta: {
    title: '组件',
    keepAlive: true,
    requireAuth: false
  },
  component: () => import('@/views/component/index.vue')
} as RouteType
