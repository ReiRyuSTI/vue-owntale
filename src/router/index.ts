import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from "../views/PageView.vue"
import PageDetailView from "../views/PageDetailView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/page",
    name:"page",
    component: PageView
  },
  {
    path:"/page/:id",
    name:"pageDetail",
    component:PageDetailView,
    props:route=>({
      id:Number(route.params.id)
    })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
