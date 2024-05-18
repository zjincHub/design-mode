<script setup lang="ts">
import Prism from 'prismjs'
import { onMounted, onUpdated } from 'vue'

const props = defineProps<{
  language: string
  code: string
}>()

onMounted(() => {
  Prism.highlightAll()
})

onUpdated(() => {
  Prism.highlightAll()
})
</script>

<template>
  <pre><code :class="`language-${props.language} line-numbers`">{{ props.code }}</code></pre>
</template>
