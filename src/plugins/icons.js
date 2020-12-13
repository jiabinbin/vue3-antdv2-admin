/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc: 可以优化, 全局加载icon
 * version: 1.0.0
 */
import app from '@/app'
import * as allIcons from '@ant-design/icons-vue'

// console.log(allIcons)
Object.keys(allIcons).forEach(name => {
  app.component(`antdv-${name}`, allIcons[name])
})
