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
.ant-admin-layout-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .antd-admin-header-right {
    display: flex;
    float: right;
    margin-left: auto;
    overflow: hidden;
    height: 100%;
  }
}

</style>
