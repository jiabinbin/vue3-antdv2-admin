import { createStore, createLogger } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

const requireContext = require.context('./modules/', false, /[A-Za-z]\w+.(js)$/)

const getStoreName = fileName => {
  return fileName.replace(/(\.\/|\.js)/g, '')
}

const modules = requireContext.keys().reduce((modules, key) => {
  const name = getStoreName(key)
  return {
    ...modules,
    [name]: requireContext(key).default
  }
}, {})

export default createStore({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
