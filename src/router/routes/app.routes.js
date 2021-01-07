/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import Layout from '@/components/Layout/BaseLayout'
// import Layout from '@/components/Layout/TestLayout'
import OtherRouterView from '@/components/RouterViews/OtherRouterView'
const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/dashboard',
    meta: {
      hidden: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Layout,
    redirect: { name: 'analysis' },
    meta: {
      icon: 'antdv-DashboardOutlined',
      title: 'Dashboard',
      i18nTitle: 'menu.dashboard'
    },
    children: [
      {
        path: 'analysis',
        name: 'analysis',
        meta: {
          title: '分析页',
          i18nTitle: 'menu.dashboard.analysis'
        },
        component: () => import(/* webpackChunkName: "analysis" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: 'monitor',
        name: 'monitor',
        meta: {
          title: '监控页',
          i18nTitle: 'menu.dashboard.monitor'
        },
        component: () => import(/* webpackChunkName: "monitor" */ '@/views/dashboard/analysis/monitor.vue')
      }, {
        path: 'workplace',
        name: 'workplace',
        meta: {
          title: '工作台',
          i18nTitle: 'menu.dashboard.workplace'
        },
        component: () => import(/* webpackChunkName: "workplace" */ '@/views/dashboard/analysis/workplace.vue')
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    redirect: { name: 'basic-form' },
    meta: {
      icon: 'antdv-FormOutlined',
      title: '表单页',
      i18nTitle: 'menu.form'
    },
    children: [
      {
        path: 'basic-form',
        name: 'basic-form',
        meta: {
          title: '基础表单',
          i18nTitle: 'menu.form.basic-form'
        },
        component: () => import(/* webpackChunkName: "basic-form" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: 'step-form',
        name: 'step-form',
        meta: {
          title: '分步表单',
          i18nTitle: 'menu.form.step-form'
        },
        component: () => import(/* webpackChunkName: "step-form" */ '@/views/dashboard/analysis/monitor.vue')
      },
      {
        path: 'advanced-form',
        name: 'advanced-form',
        meta: {
          title: '高级表单',
          i18nTitle: 'menu.form.advanced-form'
        },
        component: () => import(/* webpackChunkName: "advanced-form" */ '@/views/dashboard/analysis/workplace.vue')
      }
    ]
  },
  {
    path: '/list',
    name: 'list',
    component: Layout,
    redirect: { name: 'search' },
    meta: {
      icon: 'antdv-TableOutlined',
      title: '列表页',
      i18nTitle: 'menu.list'
    },
    children: [
      {
        path: 'search',
        name: 'search',
        meta: {
          title: '搜索列表',
          i18nTitle: 'menu.list.search-list'
        },
        redirect: { name: 'articles' },
        component: OtherRouterView,
        children: [
          {
            path: 'articles',
            name: 'articles',
            meta: {
              title: '搜索列表（文章）',
              i18nTitle: 'menu.list.search-list.articles'
            },
            component: () => import(/* webpackChunkName: "articles" */ '@/views/dashboard/analysis/analysis.vue')
          },
          {
            path: 'projects',
            name: 'projects',
            meta: {
              title: '搜索列表（项目）',
              i18nTitle: 'menu.list.search-list.projects'
            },
            component: () => import(/* webpackChunkName: "projects" */ '@/views/dashboard/analysis/analysis.vue')
          },
          {
            path: 'applications',
            name: 'applications',
            meta: {
              title: '搜索列表（应用）',
              i18nTitle: 'menu.list.search-list.applications'
            },
            component: () => import(/* webpackChunkName: "applications" */ '@/views/dashboard/analysis/analysis.vue')
          }
        ]
      },
      {
        path: 'table-list',
        name: 'table-list',
        meta: {
          title: '查询表格',
          i18nTitle: 'menu.list.table-list'
        },
        component: () => import(/* webpackChunkName: "table-list" */ '@/views/dashboard/analysis/monitor.vue')
      },
      {
        path: 'basic-list',
        name: 'basic-list',
        meta: {
          title: '标准列表',
          i18nTitle: 'menu.list.basic-list'
        },
        component: () => import(/* webpackChunkName: "basic-list" */ '@/views/dashboard/analysis/workplace.vue')
      },
      {
        path: 'card-list',
        name: 'card-list',
        meta: {
          title: '卡片列表',
          i18nTitle: 'menu.list.card-list'
        },
        component: () => import(/* webpackChunkName: "card-list" */ '@/views/dashboard/analysis/workplace.vue')
      }
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    component: Layout,
    redirect: { name: 'basic' },
    meta: {
      icon: 'antdv-ProfileOutlined',
      title: '详情页',
      i18nTitle: 'menu.profile'
    },
    children: [
      {
        path: 'basic',
        name: 'basic',
        meta: {
          title: '基础详情页',
          i18nTitle: 'menu.profile.basic'
        },
        component: () => import(/* webpackChunkName: "basic" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: 'advanced',
        name: 'advanced',
        meta: {
          title: '高级详情页',
          i18nTitle: 'menu.profile.advanced'
        },
        component: () => import(/* webpackChunkName: "advanced" */ '@/views/dashboard/analysis/analysis.vue')
      }
    ]
  },
  {
    path: '/result',
    name: 'result',
    component: Layout,
    redirect: { name: 'success' },
    meta: {
      icon: 'antdv-CheckCircleOutlined',
      title: '结果页',
      i18nTitle: 'menu.result'
    },
    children: [
      {
        path: 'success',
        name: 'success',
        meta: {
          title: '成功页',
          i18nTitle: 'menu.result.success'
        },
        component: () => import(/* webpackChunkName: "fail" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: 'fail',
        name: 'fail',
        meta: {
          title: '失败页',
          i18nTitle: 'menu.result.fail'
        },
        component: () => import(/* webpackChunkName: "fail" */ '@/views/dashboard/analysis/analysis.vue')
      }
    ]
  },
  {
    path: '/exception',
    name: 'exception',
    component: Layout,
    redirect: { name: 'not-permission' },
    meta: {
      icon: 'antdv-WarningOutlined',
      title: '异常页',
      i18nTitle: 'menu.exception'
    },
    children: [
      {
        path: '403',
        name: 'not-permission',
        meta: {
          title: '403',
          i18nTitle: 'menu.exception.not-permission'
        },
        component: () => import(/* webpackChunkName: "403" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: '404',
        name: 'not-find',
        meta: {
          title: '404',
          i18nTitle: 'menu.exception.not-find'
        },
        component: () => import(/* webpackChunkName: "404" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: '500',
        name: 'server-error',
        meta: {
          title: '500',
          i18nTitle: 'menu.exception.server-error'
        },
        component: () => import(/* webpackChunkName: "500" */ '@/views/dashboard/analysis/analysis.vue')
      }
    ]
  },
  {
    path: '/account',
    name: 'account',
    component: Layout,
    redirect: { name: 'center' },
    meta: {
      icon: 'antdv-UserOutlined',
      title: '个人页',
      i18nTitle: 'menu.account'
    },
    children: [
      {
        path: 'center',
        name: 'center',
        meta: {
          title: '个人中心',
          i18nTitle: 'menu.account.center'
        },
        component: () => import(/* webpackChunkName: "center" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        meta: {
          title: '个人设置',
          i18nTitle: 'menu.account.settings'
        },
        component: () => import(/* webpackChunkName: "settings" */ '@/views/dashboard/analysis/analysis.vue')
      }
    ]
  },
  {
    path: '/editor',
    name: 'editor',
    component: Layout,
    redirect: { name: 'flow' },
    meta: {
      icon: 'antdv-HighlightOutlined',
      title: '图形编辑器',
      i18nTitle: 'menu.editor'
    },
    children: [
      {
        path: 'flow',
        name: 'flow',
        meta: {
          title: '流程编辑器',
          i18nTitle: 'menu.editor.flow'
        },
        component: () => import(/* webpackChunkName: "flow" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: 'mind',
        name: 'mind',
        meta: {
          title: '脑图编辑器',
          i18nTitle: 'menu.editor.mind'
        },
        component: () => import(/* webpackChunkName: "mind" */ '@/views/dashboard/analysis/analysis.vue')
      },
      {
        path: 'koni',
        name: 'koni',
        meta: {
          title: '拓扑编辑器',
          i18nTitle: 'menu.editor.koni'
        },
        component: () => import(/* webpackChunkName: "koni" */ '@/views/dashboard/analysis/analysis.vue')
      }
    ]
  }
]

export default routes
