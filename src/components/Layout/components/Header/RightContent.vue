<template>
<!--  <NoticeTab />-->
  <Avatar />
  <Lang/>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import Avatar from '@/components/Layout/components/Header/Avatar'
import Lang from '@/components/Layout/components/Header/Lang'
// import NoticeTab from '@/components/Layout/components/Header/NoticeTab'

export default defineComponent({
  name: 'RightContent',
  components: {
    Avatar,
    Lang
    // NoticeTab
  },
  setup () {
    const store = useStore()
    const userInfo = store.getters['app/userInfo']

    const handleLogout = e => {}

    return {
      userInfo,
      handleLogout
    }
  }
})
</script>

<style scoped lang="less">

</style>
