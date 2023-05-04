<template>
  <div>
    <input v-model="test" type="text" />
    <router-link to="/login">To Login</router-link>
    <button @click="handleLink">Click Me</button>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
  let test = ref(0)
  function handleLink() {
    router.push('/component')
  }
</script>

<style scoped></style>
