<template>
  <a-sub-menu
    v-bind="$attrs"
    :key="currentMenu.name"
  >
    <template #title>
      <AppIcon v-if="currentMenu?.meta?.icon" :icon="currentMenu.meta.icon" />
<!--      <span>{{ renderI18n(currentMenu?.meta?.i18nTitle) }}</span>-->
      <span>{{ currentMenu?.meta?.title }}</span>
    </template>
    <template
      v-for="menu in currentMenu.children"
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
          :key="menu.name"
        >
          <router-link :to="{name: menu.children[0].name}">
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
  </a-sub-menu>
</template>

<script>
import { defineComponent } from 'vue'
import AppIcon from '@/components/AppIcon/AppIcon'
// import { renderI18n } from '@/utils/app-utils'

export default defineComponent({
  name: 'SubMenu',
  components: {
    AppIcon
  },
  props: {
    currentMenu: {
      type: Object
    }
  },
  setup () {
    return {
      // renderI18n
    }
  }
})
</script>
