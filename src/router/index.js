import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import NewCustomer from '../components/NewCustomer';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home1',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newCustomer',
    name: 'newCustomer',
    component: () => import('../components/NewCustomer')
  },
  {
    path: '/dashboard',
    name:'dashboard',
    component: () => import('../components/Dashboard')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
