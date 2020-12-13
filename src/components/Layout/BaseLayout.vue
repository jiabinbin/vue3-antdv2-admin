<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      width="208"
    >
      <div class="logo" />
      <menu-list
        ref="menuRef"
        :menu-list="menuList"
      ></menu-list>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { computed, defineComponent, reactive } from 'vue'
import { useToggle } from '@ant-design-vue/use'
import { useStore } from 'vuex'
import MenuList from './components/Menu'
export default defineComponent({
  name: 'BaseLayout',
  components: {
    MenuList
  },
  setup () {
    // collapsed
    const [collapsed, { toggle: handleToggleCollapsed }] = useToggle()
    // reactive
    const data = reactive({
      selectedKeys: ['1']
    })
    // left menus
    const store = useStore()
    const menuList = computed(() => store.getters['app/leftMenus'])
    return {
      collapsed,
      handleToggleCollapsed,
      menuList,
      ...data
    }
  }
})
</script>

<style scoped lang="less">

</style>
