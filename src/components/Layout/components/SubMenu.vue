<template>
  <!--    @titleClick="titleClick"-->
  <a-sub-menu
  >
    <template v-slot:title>
      <Icon v-if="currentMenu?.meta?.icon" :icon="currentMenu.meta.icon"></Icon>
      <span>{{ renderI18n(currentMenu?.meta?.title) }}</span>
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
          <Icon v-if="menu?.meta?.icon" :icon="menu.meta.icon"></Icon>
          <span>{{ renderI18n(menu?.meta?.title)}}</span>
        </a-menu-item>
      </template>

      <template
        v-if="menu.children && menu.children.length === 1"
      >
        <a-menu-item
          :key="menu.name"
        >
          <Icon v-if="menu.children[0].meta.icon" :icon="menu.children[0].meta.icon"></Icon>
          <span>{{ renderI18n(menu?.children[0]?.meta?.title) }}</span>
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
import Icon from '@/components/CusIcon/CusIcon'
import { renderI18n } from '@/utils/app-utils'

export default defineComponent({
  name: 'SubMenu',
  components: {
    Icon
  },
  props: {
    currentMenu: {
      type: Object
    }
  },
  setup (props, { emit }) {
    const titleClick = keys => {
      emit('title-click', keys)
    }
    return {
      titleClick,
      renderI18n
    }
  }
})
</script>

<style scoped lang="less">

</style>
