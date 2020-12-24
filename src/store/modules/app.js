/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import * as storage from 'store'
import { OPEN_TOP_MENU } from '@/config'
import routes from '@/router/routes/app.routes'
import { getLeftMenuList } from '@/utils/app-utils'

export default {
  namespaced: true,
  state: {
    userInfo: {
      username: 'admin',
      password: 'ddd'
    },
    topMenus: [],
    leftMenus: []
  },
  getters: {
    leftMenus: (state) => {
      return state.leftMenus.length === 0 ? storage.get('left_menus') : state.leftMenus
    },
    userInfo: state => state.userInfo ? state.userInfo : storage.get('user_info') ? storage.get('user_info') : null
  },
  mutations: {
    SET_LEFT_MENUS: (state, menus) => {
      state.leftMenus = menus
      storage.set('left_menus', menus)
    }
  },
  actions: {
    initMenus: ({ commit }, menus) => {
      if (!OPEN_TOP_MENU) {
        const menus = getLeftMenuList(routes)
        commit('SET_LEFT_MENUS', menus)
      }
    }
  }
}
