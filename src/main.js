//main.js
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores/index'
import '@/assets/less/common.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'hover.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
