/**
 *
 * author: jiabinbin
 * Email: 425605679@qq.com
 * Desc:
 * version: 1.0.0
 */
import { createI18n } from 'vue-i18n'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import enUS from 'ant-design-vue/lib/locale/en_US'
import { DEFAULT_LANG } from '@/config'
import { zhModules, enModules } from '@/locales/modules'

const i18n = createI18n({
  silentTranslationWarn: true,
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages: {
    'zh-CN': {
      ...zhCN,
      ...zhModules
    },
    'en-US': {
      ...enUS,
      ...enModules
    }
  }
})

export default i18n
