import router from './index'

// 路由拦截器
router.beforeEach((to, from, next) => {
  // 未登录
  if (!localStorage.getItem('token') && to.path !== '/login') {
    return next({ path: '/login' })
  }
  if (localStorage.getItem('token') && to.path === '/login') {
    // 登录了跳转 login
    if (localStorage.getItem('scope') === 6) {
      // student
      next({ path: '/student' })
    } else {
      // admin
      next({ path: '/admin' })
    }
  }
  // 已登录
  if (localStorage.getItem('token')) {
    let scope = Number(localStorage.getItem('scope'))
    let routePath = to.path.split('/')[1]
    if (routePath === 'student' && scope !== 6) {
      next({ path: '/admin' })
    }
    if (routePath === 'admin' && scope === 6) {
      next({ path: '/student' })
    }
  }
  // 已经登录
  next()
})
