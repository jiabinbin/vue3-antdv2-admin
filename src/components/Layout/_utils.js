import { uniq } from 'lodash'

/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
export const getMenuAttributeKeys = (matched, defaultOpenKeys) => {
  const routeSelectedKeys = matched.map(it => it.name).filter(name => name !== 'root')
  const routeOpenKeys = routeSelectedKeys.slice(0, routeSelectedKeys.length - 1)
  // 这里需要去掉原来的openKeys是否和当前的有重合的，如有需要去掉，否则一直增加会造成内存溢出
  const commitOpenKeys = uniq(routeOpenKeys.concat([...defaultOpenKeys]))
  return {
    routeSelectedKeys,
    commitOpenKeys
  }
}
