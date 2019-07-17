// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../pages/Main/Main.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/main',
      component: Main,
      meta:{
        show:true
      }
    },
    {
      path:'/search',
      component: Search,
      meta:{
        show:true
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta:{
        show:true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        show:true
      }
    },
    {
      path:'/',
      redirect: './main'
    },
    {
      path:'/login',
      component: Login
    },
  ]
})
