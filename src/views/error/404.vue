<template>
  <button @click="replace('/')"> 返回首页 </button>
</template>
<script setup lang="ts">
  const { replace } = useRouter()
</script>
