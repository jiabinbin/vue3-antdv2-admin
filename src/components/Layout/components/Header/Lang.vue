<template>
  <a-dropdown
    placement="bottomRight"
  >
    <template #overlay>
      <a-menu
      >
        <a-menu-item key="center">
          中
        </a-menu-item>
        <a-menu-item key="settings">
          英
        </a-menu-item>
        <a-menu-item key="logout">
          繁
        </a-menu-item>
      </a-menu>
    </template>
    <span class="action">
      <a><img src="~@/assets/custom-icons/lang.svg" alt=""></a>
    </span>
  </a-dropdown>
</template>

<script>
import { defineComponent } from 'vue'
// import HeartIcon from './cusicon'
export default defineComponent({
  name: 'Lang',
  components: {
  },
  setup () {
  }
})
</script>

<style scoped lang="less">

</style>
