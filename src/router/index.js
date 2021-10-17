import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app from './app'

const routes = [
  ...app
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes,
})

export default router