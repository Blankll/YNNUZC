import Main from '@/views/common/main.vue'

export default [
  {
    path: 'charts',
    name: 'charts',
    meta: {
      name: '信息统计',
      icon: 'iconfont icon-baobiao',
      auth: false
    },
    component: Main,
    redirect: 'charts/index',
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '学校信息统计',
          level: 1,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '学院信息统计',
          level: 2,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'cmajor',
        name: 'cmajor',
        meta: {
          name: '专业信息统计',
          level: 2,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'cedit',
        name: 'cedit',
        meta: {
          name: '基本信息管理',
          level: 3,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      }
    ]
  },
  {
    path: 'baseinfo',
    name: 'baseinfo',
    meta: {
      name: '基本信息',
      icon: 'iconfont icon-baseinfo',
      auth: false
    },
    component: Main,
    redirect: 'baseinfo/icollege',
    children: [
      {
        path: 'icollege',
        name: 'icollege',
        meta: {
          name: '学院信息',
          level: 2,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'imajor',
        name: 'imajor',
        meta: {
          name: '专业信息',
          level: 2,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'iclass',
        name: 'iclass',
        meta: {
          name: '班级信息',
          level: 3,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'istudents',
        name: 'istudents',
        meta: {
          name: '学生信息',
          level: 3,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      }
    ]
  },
  {
    path: 'score',
    name: 'score',
    meta: {
      name: '测评单元审议评分',
      icon: 'iconfont icon-score',
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'scheck',
        name: 'scheck',
        meta: {
          name: '审核学生自评信息(0.3)',
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'sreview',
        name: 'sreview',
        meta: {
          name: '定性考评(0.7)',
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      }
    ]
  },
  {
    path: 'verify',
    name: 'verify',
    meta: {
      name: '综测审核',
      icon: 'iconfont icon-verify',
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'vschool',
        name: 'vschool',
        meta: {
          name: '学校审核',
          level: 1,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'vcollege',
        name: 'vcollege',
        meta: {
          name: '学院审核',
          level: 2,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'vclass',
        name: 'vclass',
        meta: {
          name: '班级审核',
          level: 3,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      }
    ]
  },
  {
    path: 'result',
    name: 'result',
    meta: {
      name: '综测结果',
      icon: 'iconfont icon-result',
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'rall',
        name: 'rall',
        meta: {
          name: '全校综测成绩',
          level: 1,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'rall',
        name: 'rall',
        meta: {
          name: '学院综测成绩',
          level: 2,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      },
      {
        path: 'rall',
        name: 'rall',
        meta: {
          name: '班级综测成绩',
          level: 3,
          auth: false
        },
        component: () => import('@/views/admin/info/index.vue')
      }
    ]
  },
  {
    path: 'manager',
    name: 'manager',
    meta: {
      name: '管理员权限',
      icon: 'iconfont icon-manager',
      auth: false
    },
    redirect: '/admin',
    component: Main,
    children: [
      {
        path: 'mschool',
        name: 'mschool',
        meta: {
          name: '学校管理员',
          level: 1,
          auth: false
        },
        component: () => import('@/views/admin/manager/mschool/mschool.vue')
      },
      {
        path: 'mfaculty',
        name: 'mfaculty',
        meta: {
          name: '学院管理员',
          level: 2,
          auth: false
        },
        component: () => import('@/views/admin/manager/mfaculty/mfaculty.vue')
      },
      {
        path: 'mclass',
        name: 'mclass',
        meta: {
          name: '班级管理员',
          level: 3,
          auth: false
        },
        component: () => import('@/views/admin/manager/mclass/mclass.vue')
      },
      {
        path: 'mmember',
        name: 'mmember',
        meta: {
          name: '审议评分小组成员',
          level: 3,
          auth: false
        },
        component: () => import('@/views/admin/manager/mmember/mmember.vue')
      },
      {
        path: 'msystem',
        name: 'msystem',
        meta: {
          name: '系统管理员',
          level: 1,
          auth: false
        },
        component: () => import('@/views/admin/manager/msystem/msystem.vue')
      }
    ]
  }
]

// function getBoolean (num) {
//   let scope = localStorage.getItem('scope')
//   let hidden = null
//   let level = null
//   if (scope < 5) {
//     if(scope == 1 || scope == 4) {
//       level = 1
//     } else if (scope == 2) {
//       level = 2
//     } else if (scope == 3) {
//       level = 3
//     }
//     if (level > num) {
//       hidden = true // 隐藏
//     } else if (level = num) {
//       hidden = false
//     }
//   } else {
//     hidden = true
//   }
//   return hidden
//   console.log(hidden)
// }
