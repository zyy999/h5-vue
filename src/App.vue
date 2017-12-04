<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import flex from '@/util/flexible'

export default {
  name: 'app',
  created: function () {
    flex(window, document)
    this.$store.dispatch('getConfig')
  }
}
</script>

<style lang="scss">
@import 'assets/css/common/reset.scss';
</style>
