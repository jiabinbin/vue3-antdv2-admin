/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
export default {
  namespaced: true,
  state: {
    collapsed: false,
    openKeys: [],
    selectedKeys: []
  },
  getters: {
    collapsed: state => state.collapsed
  },
  mutations: {
    TOGGLE_COLLAPSED (state, status) {
      state.collapsed = status
    },
    SET_OPEN_KEYS (state, openKeys) {
      state.openKeys = openKeys
    },
    SET_SELECTED_KEYS (state, selectedKeys) {
      state.selectedKeys = selectedKeys
    }
  },
  actions: {}
}
