/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import { APP_ROUTER_MODE } from '@/config'
import { createWebHashHistory, createWebHistory } from 'vue-router'
// import { useI18n } from 'vue-i18n'

export const getAppRouterMode = () => {
  if (APP_ROUTER_MODE === 'history') {
    return createWebHistory(process.env.BASE_URL)
  } else {
    return createWebHashHistory(process.env.BASE_URL)
  }
}

export const getApplicationMenus = routes => {
  return routes.filter(it => !it.meta.hidden)
}

export const renderI18n = key => {
  // if (!key) return 'unKnown title'
  // const { t } = useI18n()
  // return t(key)
}

export const getParentRouteName = (currentRouteName, menuList) => {
  const getArray = (currentRouteName, children = [], record = []) => {
    return children.reduce((result, { name, children: innerChildren = [] }) => {
      if (name === currentRouteName) {
        return [...record, currentRouteName]
      }
      if (innerChildren) {
        return [...result, ...getArray(currentRouteName, innerChildren, [...record, name])]
      }
      return result
    }, [])
  }
  const result = getArray(currentRouteName, menuList)
  return result
}
