import { lStorage } from '@/utils/storage'
import type { Router } from 'vue-router'

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to) => {
    const token = lStorage.get('token')
    /** 没有token的情况 */
    if (!token) {
      if (!to.meta.requireAuth) return true
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }

    /** 有token的情况 */
    if (to.path === '/login') return { path: '/' }
    return true
  })
}
