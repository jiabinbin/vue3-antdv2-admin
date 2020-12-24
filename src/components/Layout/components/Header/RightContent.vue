<template>
  <Avatar />
  <Lang/>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import Avatar from '@/components/Layout/components/Header/Avatar'
import Lang from '@/components/Layout/components/Header/Lang'

export default defineComponent({
  name: 'RightContent',
  components: {
    Avatar,
    Lang
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
