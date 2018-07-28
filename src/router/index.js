import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DJ from '@/components/dj'
import index from '@/components/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dj',
      name: 'dj',
      component: DJ
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
