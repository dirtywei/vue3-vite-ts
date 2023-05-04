import { createStorage } from './storage'

const prefixKey = 'Vue3'

export const createLocalStorage = function (option: { prefixKey: any }) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: localStorage
  })
}

export const createSessionStorage = function (option: { prefixKey: any }) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: sessionStorage
  })
}

export const lStorage = createLocalStorage({ prefixKey })

export const sStorage = createSessionStorage({ prefixKey })
