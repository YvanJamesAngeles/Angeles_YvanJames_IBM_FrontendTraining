import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router-index.js'

import TaskListView_Template_Task2 from './views/day2/TaskListView_Template_Task2.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
