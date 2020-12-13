/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import Layout from '@/components/Layout/BaseLayout'
import RouterMiddleware from '@/components/RouterMiddleware'

const routes = [
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'root',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: RouterMiddleware,
        redirect: { name: 'analysis' },
        meta: {
          icon: 'antdv-DashboardOutlined',
          title: 'menu.dashboard'
        },
        children: [
          {
            path: 'analysis',
            name: 'analysis',
            meta: {
              title: 'menu.dashboard.analysis'
            },
            component: () => import(/* webpackChunkName: "analysis" */ '@/views/dashboard/analysis/analysis.vue')
          },
          {
            path: 'monitor',
            name: 'monitor',
            meta: {
              title: 'menu.dashboard.monitor'
            },
            component: () => import(/* webpackChunkName: "monitor" */ '@/views/dashboard/analysis/monitor.vue')
          },
          {
            path: 'workplace',
            name: 'workplace',
            meta: {
              title: 'menu.dashboard.workplace'
            },
            component: () => import(/* webpackChunkName: "workplace" */ '@/views/dashboard/analysis/workplace.vue')
          }
        ]
      }
    ]
  }
]

export default routes
