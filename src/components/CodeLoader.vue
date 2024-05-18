<script setup lang="ts">
import { ref } from 'vue'
import Anchor from '@/components/Anchor.vue'
import CodeDisplayer from '@/components/CodeDisplayer.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'

const props = defineProps<{
  title: string
  element: string
}>()

const code = ref('')
let component: any = ref()
async function load() {
  component.value = await import(`../pages/${props.element}.vue`)
  code.value = (await import(`../docs/${props.element}.js`)).default
}

load()
</script>

<template>
  <Anchor>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ title }}</template>
    <component :is="component?.default"></component>
    <CodeDisplayer language="markup" :code="code" />
  </Anchor>
</template>
