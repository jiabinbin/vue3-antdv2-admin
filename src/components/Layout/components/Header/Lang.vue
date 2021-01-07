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
  components: {},
  setup () {
  }
})
</script>

<style scoped lang="less">
.action {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.3s;

  .avatar {
    margin: 20px 8px 20px 0;
  }

  > span {
    vertical-align: middle;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }

  .name {
    color: black;
  }
}
</style>
