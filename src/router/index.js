import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import MyBuilding from '../views/Building.vue'
import Trading from '../views/Trading.vue'

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
    path: '/building',
    name: 'mybuilding',
    component: MyBuilding
  },
  {
    path: '/trading',
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
