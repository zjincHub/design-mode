<script setup lang="ts">
const props = defineProps<{
  language: string
  code: string
}>()
</script>

<template>
  <highlightjs :language="props.language" :code="props.code" />
</template>
