<template>
  <a-layout-header
    style="padding: 0px; height: 48px; line-height: 48px; width: 100%; z-index: 19;"
  >
    <div class="ant-admin-layout-header">
      <div style="flex: 1 1 0%;"></div>
      <div class="antd-admin-header-right">
        <RightContent/>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { defineComponent } from 'vue'
import RightContent from './RightContent'

export default defineComponent({
  name: 'Header',
  components: {
    RightContent
  }
})
</script>

<style scoped lang="less">

</style>
