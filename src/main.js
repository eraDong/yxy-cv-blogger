//main.js
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores/index'
import '@/assets/less/common.less'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
