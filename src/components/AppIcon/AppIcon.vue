<template>
  <component :is="icon"></component>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
</style>
