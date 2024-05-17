import './assets/main.css'

import { createApp } from 'vue'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/atom-one-light.css'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import App from './App.vue'

hljs.registerLanguage('typescript', typescript)

createApp(App).use(hljsVuePlugin).mount('#app')
