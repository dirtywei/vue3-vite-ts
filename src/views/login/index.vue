<template>
  <div>
    <div>名字:{{ testObj.name }}</div>
    <div @click="handleClick">年纪:{{ testObj.age }}</div>
    <icon-custom-earth class="icon"></icon-custom-earth>
    <icon-mdi-account-box style="font-size: 2em" />
    <svg-icon class="icon" name="iconx" color="#fff"></svg-icon>
    <router-link to="/">To Home</router-link>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/store'
  import { fetchLogin } from '@/service/api/auth'
  const userStore = useUserStore()
  console.log(userStore.age)
  const testObj = reactive({
    name: 'DirtyWei',
    age: 29
  })
  function handleClick() {
    testObj.age++
    fetchLogin({ name: 'DirtyWei', password: 112233 })
  }
</script>

<style scoped></style>
