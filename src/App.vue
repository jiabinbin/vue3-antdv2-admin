<template>
  <a-config-provider :locale="locale">
    <router-view/>
  </a-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import initApplication from '@/utils/bootstrap'
// import { useI18n } from 'vue-i18n'
// import { DEFAULT_LANG } from '@/config'
import locale from 'ant-design-vue/es/locale/zh_CN'

export default defineComponent({
  name: 'app',
  setup () {
    initApplication()

    // const { getLocaleMessage } = useI18n()
    // const locale = getLocaleMessage(DEFAULT_LANG)
    return {
      locale
    }
  }
})
</script>

<style lang="less">
</style>
