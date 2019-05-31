import Vue from 'vue'
import Router from 'vue-router'
import bottom from '@/components/bottom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bottom',
      component: bottom
    }
  ]
})
