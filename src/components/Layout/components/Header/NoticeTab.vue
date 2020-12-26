<template>
  <a-dropdown
    :trigger="['click']"
  >
    <template #overlay>
      <a-menu>
        <a-menu-item key="tabs" disabled>
          <a-tabs>
            <a-tab-pane key="1" tab="通知" force-render>
              1
            </a-tab-pane>
            <a-tab-pane key="2" tab="消息">
              2
            </a-tab-pane>
            <a-tab-pane key="3" tab="代办">
              3
            </a-tab-pane>
          </a-tabs>
        </a-menu-item>
      </a-menu>
    </template>
    <div
      class="ant-admin-notice-bar"
    >
      <div
        class="ant-admin-notice-bar-badge"
        @click="handleClickBadge"
      >
        <a-badge
          count="11"
          :offset="[4, -4]"
        >
          <antdv-BellOutlined/>
        </a-badge>
      </div>
    </div>
  </a-dropdown>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoticeTab',
  setup () {
    const handleClickBadge = e => {
    }
    return {
      handleClickBadge
    }
  }
})
</script>

<style scoped>
  >>> .ant-dropdown-menu-item-disabled {
    cursor: pointer;
  }
</style>
<style scoped lang="less">
.ant-admin-notice-bar {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }

  &-badge {
    vertical-align: middle;
    font-size: 16px;
    display: inline-block;
    color: black;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    padding: 4px;
  }
}
</style>
