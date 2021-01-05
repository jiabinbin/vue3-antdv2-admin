<template>
  <div class="ant-admin-layout">
    <a-layout id="layout" style="min-height: 100vh;">
      <a-layout-sider
        class="ant-admin-layout-sider"
        v-model:collapsed="collapsed"
        collapsible
        width="208"
        :collapsedWidth="48"
        @collapse="changeCollapsed"
      >
        <template v-slot:trigger>
          <div class="ant-admin-layout-trigger">
            <antdv-MenuFoldOutlined style="font-size: 16px;" v-if="!collapsed"/>
            <antdv-MenuUnfoldOutlined style="font-size: 16px;" v-else/>
          </div>
        </template>
        <div :class="[!collapsed ? 'ant-admin-sider-logo' : 'ant-admin-sider-logo-collapsed']">
          <a>
            <img src="~@/assets/ant-pro-log.svg" alt="logo">
            <h1 v-if="!collapsed">Antd Vue3</h1>
          </a>
        </div>
        <div class="ant-admin-layout-menu">
          <menu-list></menu-list>
        </div>
      </a-layout-sider>
      <div :class="[!collapsed ? 'ant-admin-layout-menu-hidden' : 'ant-admin-layout-menu-hidden-collapsed']"></div>
      <a-layout style="position: relative">
        <Header></Header>
        <a-layout-content class="ant-admin-layout-content">
          <div> <!-- :style="{ padding: '24px', background: '#fff', minHeight: '360px' }" -->
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer :class="[!collapsed ? 'ant-layout-footer' : 'ant-layout-footer-collapsed']">
          <footer class="ant-admin-layout-footer">
            ©2018 Created by Jobin Jia
          </footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import MenuList from '@/components/Layout/components/Menu'
import Header from '@/components/Layout/components/Header/Header'
import { useRoute } from 'vue-router'
import { getMenuOpenKeys } from '@/components/Layout/_utils'

export default defineComponent({
  name: 'BaseLayout',
  components: {
    MenuList,
    Header
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const collapsed = ref(computed(() => store.state.layout.collapsed).value)
    // antdV menu openKeys
    // const storeOpenKeys = computed(() => store.state.layout.openKeys)
    // const openKeys = ref([...storeOpenKeys.value])

    const menuList = computed(() => store.getters['app/leftMenus'])

    const changeCollapsed = (value, type) => {
      if (value) {
        store.commit('layout/SET_OPEN_KEYS', [])
      } else {
        const openKeys = getMenuOpenKeys(route.matched)
        store.commit('layout/SET_OPEN_KEYS', openKeys)
      }
      store.commit('layout/TOGGLE_COLLAPSED', value)
    }
    return {
      collapsed,
      menuList,
      changeCollapsed
    }
  }
})
</script>
