// import { lStorage } from '@/utils/storage/index'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { NOT_FOUND_ROUTE, basicRoutes, asyncRoutes } from './routes'
import { RouteType, RoutesType } from '~/typings/router'
import { lStorage } from '@/utils/storage'

export const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export async function setupRouter(app: App) {
  await addDynamicRoutes()
  setupRouterGuard(router)
  app.use(router)
}

export async function addDynamicRoutes() {
  //测试
  asyncRoutes.forEach((route: RouteType) => {
    !router.hasRoute(route.name) && router.addRoute(route)
  })
  router.addRoute(NOT_FOUND_ROUTE)

  const token = lStorage.get('token')
  // 没有token情况
  if (!token) {
    return
  }
  // 有token的情况
  try {
    // const userStore = useUserStore()
    // const permissionStore = usePermissionStore()
    // !userStore.userId && (await userStore.getUserInfo())
    // const accessRoutes = permissionStore.generateRoutes(userStore.role)
    // accessRoutes.forEach((route: RouteType) => {
    //   !router.hasRoute(route.name) && router.addRoute(route)
    // })
    // asyncRoutes.forEach((route: RouteType) => {
    //   !router.hasRoute(route.name) && router.addRoute(route)
    // })
    // router.addRoute(NOT_FOUND_ROUTE)
  } catch (error) {
    console.error(error)
  }
}

export async function resetRouter() {
  const basicRouteNames = getRouteNames(basicRoutes)
  router.getRoutes().forEach((route) => {
    const name = route.name as string
    if (!basicRouteNames.includes(name)) router.removeRoute(name)
  })
}

export function getRouteNames(routes: RoutesType) {
  return routes.map((route: RouteType) => getRouteName(route)).flat(1)
}

function getRouteName(route: RouteType) {
  const names = [route.name]
  if (route.children && route.children.length)
    names.push(...route.children.map((item) => getRouteName(item as RouteType)).flat(1))

  return names
}
