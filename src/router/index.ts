import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import TaskList from '../views/day3/TaskList.vue'
import TaskDetail from '../views/day3/TaskDetail.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', component: TaskList },
    { path: '/tasks/:id', component: TaskDetail },
    { path: '/:pathMatch(.)', redirect: '/' }
]

const router = createRouter({
history: createWebHistory(),
routes
})
export default router