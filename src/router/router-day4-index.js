import { createRouter, createWebHistory } from 'vue-router'
// Updated imports for new Day 4 paths
import HomeView       from '../views/day4/TaskListView.vue'
import { useTaskStore } from '../views/day4/TaskStore.js'
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresTask) {
    const taskStore = useTaskStore()
    const id = Number(to.params.id)
    const taskExists = taskStore.tasks.find(t => t.id === id)
    if (!taskExists) {
      return next({
        path: '/home',
        query: { error: 'notfound' }
      })
    }
  }
  next()
})
export default router