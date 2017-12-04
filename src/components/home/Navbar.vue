<template>
  <ul class="nav">
    <router-link tag="li" to="/follow">
      <i class="follow"></i>
      <a>关注</a>
    </router-link>
    <router-link tag="li" to="/" exact>
      <i class="home"></i>
      <a>首页</a>
    </router-link>
    <router-link tag="li" to="/self">
      <i class="self"></i>
      <a>我的</a>
    </router-link>
  </ul>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped lang="scss">
@import '../../assets/css/common/px2rem.scss';

.nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: px2rem(100);
    background: #fff;
    align-items: center;
    position: fixed;
    bottom: 0;
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        text-decoration: none;
        font-size: px2rem(18);
        color: #9a9a9a;
        margin-top: px2rem(7);
      }
      i {
        display: inline-block;
      }
      .follow {
        width: px2rem(42);
        height: px2rem(46);
        background: url('../../assets/image/follow.png') center center;
        background-size: cover;
      }
      .home {
        width: px2rem(48);
        height: px2rem(47);
        background: url('../../assets/image/home.png') center center;
        background-size: cover;
      }
      .self {
        width: px2rem(42);
        height: px2rem(46);
        background: url('../../assets/image/follow.png') center center;
        background-size: cover;
      }

      &.router-link-active {
        .follow {
          background-image: url('../../assets/image/follow-active.png')
        }
        .home {
          background-image: url('../../assets/image/home-active.png')
        }
        .self {
          background-image: url('../../assets/image/self-active.png')
        }
      }
    }
  }
</style>
