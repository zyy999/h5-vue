<template>
<div class="download-popup" v-show="show">
  <div class="close" @click="$emit('hideDownload')"></div>
  <img src="../../assets/image/logo.png" class="down-img">
  <p class="p1">大王直播</p>
  <p class="p2">泛娱乐直播平台</p>
  <p class="p3">下载大王直播APP<br>享受更多亲密特权</p>
  <a class="download-btn" href="javascript:void(0);">立即下载</a>
</div>
</template>

<script>
export default {
  name: 'Download',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../assets/css/common/px2rem.scss";

.download-popup {
  width: px2rem(526);
  background: #fff;
  border-radius: px2rem(10);
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  margin-top: px2rem(256, false);
  margin-left: px2rem(263, false);
  text-align: center;
  p {
    letter-spacing: px2rem(1);
  }
  .down-img {
    width: px2rem(91);
    height: px2rem(93);
    margin-top: px2rem(50);
  }
  .p1 {
    font-size: px2rem(26);
    color: #353535;
    margin-top: px2rem(15);
    font-weight: bold;
  }
  .p2 {
    font-size: px2rem(22);
    color: #353535;
    margin-top: px2rem(15);
  }
  .p3 {
    font-size: px2rem(30);
    color: #353535;
    margin-top: px2rem(45);
    line-height: px2rem(40);
    font-weight: bold;
  }
  .download-btn {
    display: inline-block;
    width: px2rem(364);
    height: px2rem(88);
    font-size: px2rem(34);
    color: #fff;
    background: #fe4a89;
    text-align: center;
    line-height: px2rem(88);
    border-radius: px2rem(50);
    text-decoration: none;
    margin-bottom: px2rem(42);
  }
  .close {
    width: px2rem(30);
    height: px2rem(29);
    background: url("../../assets/image/close.png") center center;
    position: absolute;
    right: px2rem(20);
    top: px2rem(20);
  }
}
</style>

