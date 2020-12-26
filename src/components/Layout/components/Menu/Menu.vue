<template>
  <a-menu
    theme="dark"
    mode="inline"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @openChange="openChange"
    class="ant-admin-menu"
    inlineCollapsed
    :inlineIndent="16"
  >
    <template
      v-for="menu in menuList"
    >
      <template
        v-if="(!menu.children || (menu.children && menu.children.length === 0))"
      >
        <a-menu-item
          :key="menu.name"
        >
          <router-link :to="{name: menu.name}">
            <AppIcon v-if="menu?.meta?.icon" :icon="menu.meta.icon" />
            <!--          <span>{{ renderI18n(menu?.meta?.i18nTitle) }}</span>-->
            <span>{{ menu?.meta?.title }}</span>
          </router-link>
        </a-menu-item>
      </template>

      <template
        v-if="menu.children && menu.children.length === 1"
      >
        <a-menu-item
          :key="menu.children[0].meta.name"
        >
          <router-link :to="{name: menu.children[0].meta.name}">
            <AppIcon v-if="menu.children[0].meta.icon" :icon="menu.children[0].meta.icon" />
            <!--          <span>{{ renderI18n(menu?.children[0]?.meta?.i18nTitle) }}</span>-->
            <span>{{ menu?.children[0]?.meta?.title }}</span>
          </router-link>
        </a-menu-item>
      </template>

      <template
        v-if="menu.children && menu.children.length > 1"
      >
        <SubMenu :key="menu.name" :current-menu="menu"></SubMenu>
      </template>
    </template>
  </a-menu>
</template>

<script>
import { computed, defineComponent, ref, watch } from 'vue'
import AppIcon from '@/components/AppIcon/AppIcon'
import SubMenu from '../SubMenu'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { getMenuAttributeKeys } from '@/components/Layout/_utils'

export default defineComponent({
  name: 'Menu',
  components: {
    AppIcon,
    SubMenu
  },
  setup (props) {
    // const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const menuList = computed(() => store.getters['app/leftMenus'])
    // antdV menu openKeys
    const storeOpenKeys = computed(() => store.state.layout.openKeys)
    const openKeys = ref([...storeOpenKeys.value])
    // antdV menu selectedKeys
    const storeSelectedKeys = computed(() => store.state.layout.selectedKeys)
    const selectedKeys = ref([...storeSelectedKeys.value])
    // collapsed
    const collapsed = ref(computed(() => store.state.layout.collapsed).value)

    const openChange = (key) => {
      store.commit('layout/SET_OPEN_KEYS', key)
    }

    watch(() => route.name, name => {
      const matched = route.matched
      const { routeSelectedKeys, commitOpenKeys } = getMenuAttributeKeys(matched, openKeys.value)
      // 路由切换时openKeys就用selectedKeys，展开当前菜单，并收起其它菜单
      store.commit('layout/SET_OPEN_KEYS', commitOpenKeys)
      store.commit('layout/SET_SELECTED_KEYS', routeSelectedKeys)
    }, { immediate: true })

    watch(storeOpenKeys, keys => {
      openKeys.value = keys
    }, { immediate: true })

    watch(storeSelectedKeys, keys => {
      selectedKeys.value = keys
    }, { immediate: true })

    return {
      menuList,
      collapsed,
      openChange,
      openKeys,
      selectedKeys
    }
  }
})
</script>
