<template>
  <svg aria-hidden="true" width="1em" height="1em">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
  interface Props {
    name: string
    color?: string
  }
  const props = withDefaults(defineProps<Props>(), {
    color: '#333'
  })

  const symbolId = computed(() => `#${props.name}`)
</script>
