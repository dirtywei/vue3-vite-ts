import type { Router } from 'vue-router'

const baseTitle: string = import.meta.env.VITE_TITLE

export function createPageTitleGuard(router: Router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title
    if (pageTitle) document.title = `${pageTitle} | ${baseTitle}`
    else document.title = baseTitle
  })
}
