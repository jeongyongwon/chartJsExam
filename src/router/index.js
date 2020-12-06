import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import MyBuilding from '../views/Build-C.vue'
import Trading from '../views/Trade-C.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/build',
    name: 'mybuilding',
    component: MyBuilding
  },
  {
    path: '/trade',
    name: 'Trading',
    component: Trading
  }   
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
