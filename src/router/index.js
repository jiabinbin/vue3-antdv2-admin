import { createRouter } from 'vue-router'
import routes from '@/router/routes/app.routes'
import { getAppRouterMode } from '@/utils/app-utils'

const router = createRouter({
  history: getAppRouterMode(),
  routes
})

export default router
