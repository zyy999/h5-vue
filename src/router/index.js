import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import List from '@/components/home/List'
import Follow from '@/components/follow/Follow'
import Self from '@/components/self/Self'
import Live from '@/components/live/Live'

// 静态页面，开发用
import PageHome from '@/components/page/Home'
import PageLive from '@/components/page/Live'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/page/home',
      component: PageHome
    },
    {
      path: '/page/live',
      component: PageLive
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: List
        },
        {
          path: 'follow',
          component: Follow
        },
        {
          path: 'self',
          component: Self
        }
      ]
    },
    {
      path: '/live/:id',
      component: Live,
      name: 'room'
    }
  ]
})
