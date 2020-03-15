import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouterMap = [
  {
    name: 'home',
    path: '/home',
    component: () => import('@/view/home/home'),
    children: [
      // {
      //   name: 'home-product',
      //   path: 'product/:id',
      //   component: () => import('@/view/product/product')
      // }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('@/view/category/category')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('@/view/cart/cart')
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('@/view/personal/personal')
  },
  // {
  //   path: '/index',
  //   name: 'helloWorld',
  //   component: () => import('@/views/HelloWorld'),
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login/Login')
  // },
  // {
  //   path: '/reg',
  //   name: 'reg',
  //   component: () => import('@/views/reg/Reg')
  // },
  // {
  //   path: '*',
  //   redirect: '/login'
  // }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
