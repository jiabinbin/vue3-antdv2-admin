/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
const requireZHContext = require.context('./zh-CN/', false, /[A-Za-z]\w+.(js)$/)
const requireENContext = require.context('./en-US/', false, /[A-Za-z]\w+.(js)$/)

const getModules = context => {
  return context.keys().reduce((modules, key) => {
    return {
      ...modules,
      ...context(key).default
    }
  }, {})
}

export const zhModules = getModules(requireZHContext)

export const enModules = getModules(requireENContext)
