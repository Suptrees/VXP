import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Boot from '../views/Boot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/boot',
    name: 'Boot',
    component: Boot
  },
  // 拖拽功能测试组件
  {
    path: '/tz',
    name: 'tz',
    component: () => import('../views/tuozhuai.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
