import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home/Home'
import Pos from '@/components/page/Pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Pos',
      name: 'Pos',
      component: Pos
    }
  ]
})
