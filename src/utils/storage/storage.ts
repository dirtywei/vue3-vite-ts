import { isNullOrUndef, enCrypto, deCrypto } from '@/utils/common'

class MyStorage {
  storage: Storage
  prefixKey: string
  constructor(option: { storage: Storage; prefixKey: string }) {
    this.storage = option.storage
    this.prefixKey = option.prefixKey
  }
  getKey(key: string) {
    return `${this.prefixKey}${key}`.toUpperCase()
  }

  set(key: string, value: any, expire = 0) {
    const stringData = JSON.stringify({
      value,
      time: Date.now(),
      expire: expire ? new Date().getTime() + expire * 1000 : null
    })
    this.storage.setItem(this.getKey(key), enCrypto(stringData))
  }

  get(key: any) {
    const { value } = this.getItem(key)
    return value
  }

  getItem(key: string, def = null) {
    const val = this.storage.getItem(this.getKey(key))
    if (!val) return { value: def }
    try {
      const data = JSON.parse(deCrypto(val))
      const { value, time, expire } = data
      if (isNullOrUndef(expire) || expire > new Date().getTime()) {
        return { value, time }
      }
      this.remove(key)
      return { value: def }
    } catch (error) {
      this.remove(key)
      return { value: def }
    }
  }

  remove(key: string) {
    this.storage.removeItem(this.getKey(key))
  }

  clear() {
    this.storage.clear()
  }
}

export function createStorage({ prefixKey = '', storage = sessionStorage }) {
  return new MyStorage({ prefixKey, storage })
}
