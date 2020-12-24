<template>
  <a-dropdown
    placement="bottomLeft"
  >
    <template #overlay>
      <a-menu
      >
        <a-menu-item key="center">
          <antdv-UserOutlined/>
          个人中心
        </a-menu-item>
        <a-menu-item key="settings">
          <antdv-SettingOutlined/>
          个人设置
        </a-menu-item>
        <a-menu-divider/>
        <a-menu-item key="logout">
          <antdv-LogoutOutlined/>
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
    <span class="action">
      <a-avatar class="avatar" src="https://portrait.gitee.com/uploads/avatars/user/1755/5267877_jobin_jia_1608578025.png" size="small" alt="avatar"/>
      <span class="name">Test Admin</span>
    </span>
  </a-dropdown>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>

<style scoped lang="less">

</style>
