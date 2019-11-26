import Vue from 'vue'
import VueRouter from 'vue-router'
import DayInHistoryViewer from '../components/DayInHistoryViewer.vue'
import Todo from '../components/Todo.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: DayInHistoryViewer
  },
  {
    path: '/day-in-history',
    name: 'day-in-history',
    component: DayInHistoryViewer
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  }
]

const router = new VueRouter({
  routes
})

export default router
