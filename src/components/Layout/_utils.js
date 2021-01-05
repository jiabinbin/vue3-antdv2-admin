/**
 * 跟据当前的路由获取菜单的openKeys
 * @param matched
 * @returns {*[]|*}
 */
export const getMenuOpenKeys = matched => {
  if (matched.length === 0) return []
  return matched.filter(it => it.path !== '/').map(it => it.name)
}
