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
import { getApplicationMenus } from '@/utils/app-utils'

export default {
  namespaced: true,
  state: {
    userInfo: {
      username: 'admin',
      password: 'ddd'
    },
    menus: []
  },
  getters: {
    menus: (state) => {
      return state.menus.length === 0 ? getApplicationMenus(routes) : state.menus
    },
    userInfo: state => state.userInfo ? state.userInfo : storage.get('user_info') ? storage.get('user_info') : null
  },
  mutations: {
    SET_LEFT_MENUS: (state, menus) => {
      state.menus = menus
      // storage.set('menus', menus)
    }
  },
  actions: {
    initMenus: ({ commit }, menus) => {
      if (!OPEN_TOP_MENU) {
        const menus = getApplicationMenus(routes)
        commit('SET_LEFT_MENUS', menus)
      }
    }
  }
}
