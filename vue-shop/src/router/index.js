import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Category from '@/pages/Category'
import Shopcart from '@/pages/Shopcart'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
