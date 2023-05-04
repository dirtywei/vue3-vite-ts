import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  // id必填，且需要唯一
  state: () => {
    return {
      name: '以和为贵',
      age: 20
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
    updateAge(age: number) {
      this.age = age
    },
    logout() {
      console.log('logout')
    },
    getUserInfo() {
      setTimeout(function () {
        console.log('执行了获取角色信息')
      }, 100)
    }
  }
})
