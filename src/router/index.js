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
    path: '/trade',
    name: 'Trade',
    component: Trading
  },
  {
    path: '/build',
    name: 'Build',
    component: MyBuilding
  }   
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
