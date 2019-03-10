import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/admin/layout/layout'
import sLayout from '@/views/students/layout/slayout'
import siderPath from './siderPath.js'
import otherPath from './otherPath.js'
import stuPath from './stuPath.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/admin'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        name: '登录'
      },
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/charts',
      meta: {
        title: '基本信息管理',
        icon: 'el-icon-sold-out',
        name: '首页',
        auth: false // 这个字段以后用来验证必须登录才能查看
      },
      component: Layout,
      hidden: false,
      children: siderPath
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        name: '首页',
        auth: false
      },
      component: Layout,
      children: otherPath
    },
    {
      path: '/student',
      name: 'student',
      redirect: '/student/info',
      meta: {
        name: '学生端首页',
        auth: false
      },
      component: sLayout,
      children: stuPath
    },
    {
      path: '/404',
      name: '404',
      mate: {
        name: '404'
      },
      component: () => import('@/views/error/404.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
