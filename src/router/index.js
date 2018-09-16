import Vue from 'vue'
import Router from 'vue-router'
import LoginHome from '@/pages/login/LoginHome'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login-Home',
      component: LoginHome,
      meta: {
        title: '登录页面'
      }
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    }
  ]
})
