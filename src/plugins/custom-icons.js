/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import app from '@/app'
import { defineComponent } from 'vue'
import Icon from '@ant-design/icons-vue'
import { CUSTOM_ICON_START_WITH } from '@/config'

const context = require.context('@/assets/custom-icons/', true, /([\w+]\.(svg))$/)
const icons = context.keys().reduce((allIcons, ck) => {
  console.log(ck)
  const name = ck.replace(/(\.\/|\.svg)/g, '')
  return [...allIcons, {
    name: `${CUSTOM_ICON_START_WITH}${name}`,
    path: `${context(ck)}?inline`
  }]
}, [])

console.log(icons)

const getTemplate = path => {
  return {
    template: path
  }
}

const generatorIconComponent = icon => {
  const {
    name,
    path
  } = icon
  console.log(name, path)
  return defineComponent({
    name: name,
    components: {
      Icon
    },
    setup () {
      return () => (
        <Icon component={getTemplate(path)}></Icon>
      )
    }
  })
}

icons.forEach(icon => {
  const instance = generatorIconComponent(icon)
  console.log(instance)
  app.component(instance.name, instance)
})
