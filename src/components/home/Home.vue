<template>
  <div class="wrap">
    <router-view></router-view>
    <Navbar/>
  </div>
</template>

<script>
  import Navbar from '@/components/home/Navbar'
  export default {
    name: 'Home',
    components: {
      Navbar
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    background: #fff;
    position: relative;
    padding-bottom: 1rem;
  }
</style>
