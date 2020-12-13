/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import { useStore } from 'vuex'
export default function initApplication () {
  const store = useStore()
  store.dispatch('app/initMenus').then(r => {
    // console.log(r)
  })
}
