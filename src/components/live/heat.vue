<template>
    <div class="heats" v-if="heat">
      热度:<span>{{ heat }}</span><i></i>
    </div>
</template>

<script>
export default {
  name: 'heat',
  props: ['heat']
}
</script>

<style lang="scss">
@import "../../assets/css/common/px2rem.scss";
.heats {
  position: absolute;
  left: px2rem(20);
  top: px2rem(105);
  /*width:px2rem(230);*/
  border-radius: px2rem(33);
  z-index: 2;
  background-color: rgba(64, 53, 53, 0.4);
  padding: px2rem(10) px2rem(20);
  font-size: px2rem(24);
  color: #fe4a89;
  span {
    color: #fff;
  }
  i {
    width: px2rem(10);
    height: px2rem(18);
    display: inline-block;
    background: url("../../assets/image/live_jt.png") no-repeat;
    background-size: cover;
    margin-left: px2rem(25);
  }
}
</style>
