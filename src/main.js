import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import TheBadge from '@/components/TheBadge.vue'
import './assets/styles/main.scss'

const app = createApp(App)

app.use(router)
app.component('the-badge', TheBadge)
app.mount('#app')
