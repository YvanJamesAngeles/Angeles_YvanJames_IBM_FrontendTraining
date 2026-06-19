import { createRouter, createWebHistory } from 'vue-router'
// Updated imports for new Day 4 paths
import HomeView from '../views/day5/TodoListView.vue'
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router