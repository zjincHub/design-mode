<script setup lang="ts">
import { ref } from 'vue'
import Anchor from '@/components/Anchor.vue'
import CodeDisplayer from '@/components/CodeDisplayer.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'

const props = defineProps<{
  title: string
  path: string
}>()

const code = ref('')
async function load() {
  const { play, codeString } = await import(props.path)
  code.value = codeString
  play()
}

load()
</script>

<template>
  <Anchor>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ title }}</template>
    <CodeDisplayer language="typescript" :code="code" />
  </Anchor>
</template>
..
