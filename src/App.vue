<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import initApplication from '@/utils/bootstrap'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'app',
  setup () {
    initApplication()

    const { getLocaleMessage } = useI18n()
    const locale = getLocaleMessage('zh-CN')
    console.log(locale)
    return {
      locale
    }
  }
})
</script>

<style lang="less">
</style>
