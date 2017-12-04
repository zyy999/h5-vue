<template>
  <div class="anchor-info" v-if="anchor">
    <img :src="small_head_url">
    <div class="inma">
      <p>{{anchor.nickname}}</p>
      <p>当前<i>{{anchor.follow_num}}</i>人</p>
    </div>
    <a href="javascript:void(0);" class="follow">关注</a>
  </div>

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'follow',
    props: ['anchor'],
    computed: {
      ...mapState({
        imagePath: state => state.config.imagePath
      }),
      small_head_url () {
        return this.imagePath + this.anchor.small_head_url
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common/px2rem.scss";
  .anchor-info {
    position: absolute;
    left: px2rem(20);
    top: px2rem(20);
    width: px2rem(306);
    height: px2rem(56);
    border-radius: px2rem(33);
    z-index: 2;
    background-color: rgba(64, 53, 53, 0.4);
    padding: px2rem(8);
    display: flex;
    align-items: center;
    justify-content: space-between;
  img {
    width: px2rem(56);
    height: px2rem(56);
    border-radius: 50%;
    display: inline-block;
  }
  .inma {
    height: px2rem(66);
    display: inline-block;
    font-size: px2rem(22);
    color: #ffffff;
  p {
    font-size: px2rem(20);
    width: px2rem(150);
    margin-top: px2rem(5);
  i {
    font-style: normal;
  }
  }
  }
  .follow {
    display: inline-block;
    width: px2rem(76);
    height: px2rem(44);
    font-size: px2rem(22);
    border-radius: px2rem(33);
    background: #fff;
    text-decoration: none;
    line-height: px2rem(44);
    text-align: center;
    color: #fe4a89;
  }
  }
</style>
