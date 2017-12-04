<template>
   <div class="share-box" v-on:click="shareChange" v-bind:style="{ display : (shareDialogSwitch?'block':'none') }">
            <img class="share_bg" src="../../assets/image/share-bg.png">
            <div class="share_main">
                <ul class="share_ul">
                    <li>
                        <img src="../../assets/image/share-weixin.png">
                        <p>微信好友</p>
                    </li>
                    <li class="penyouq">
                        <img src="../../assets/image/share-pengyouq.png">
                        <p>微信朋友圈</p>
                    </li>
                </ul>
                <p class="share_p1">喜欢主播吗？</p>
                <p class="share_p2">美好的事物记得要跟朋友分享哦～</p>
            </div>
        </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'share',
  computed: {
    ...mapState({
      loginDialogSwitch: state => state.status.loginDialogSwitch,
      downloadDialogSwitch: state => state.status.downloadDialogSwitch,
      giftListSwitch: state => state.status.giftListSwitch,
      shareDialogSwitch: state => state.status.shareDialogSwitch,
      inputDialogSwitch: state => state.status.inputDialogSwitch
    })
  },
  methods: {
    ...mapMutations(['loginChange', 'downloadChange', 'shareChange'])
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/common/px2rem.scss";
.share-box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
  text-align: center;
  .share_bg {
    width: px2rem(371);
    height: px2rem(218);
    position: absolute;
    top: 0;
    right: px2rem(35);
  }
  .share_main {
    position: absolute;
    top: 30%;
    width: px2rem(460);
    left: 50%;
    margin-left: px2rem(230, false);
  }
  .share_ul {
    overflow: hidden;
    li {
      list-style: none;
      float: left;
      text-align: center;
      img {
        width: px2rem(130);
        height: px2rem(130);
      }
      p {
        font-size: px2rem(22);
        color: #fff;
        margin-top: px2rem(20);
        letter-spacing: px2rem(2);
      }
    }
    li.penyouq {
      margin-left: px2rem(200);
    }
  }
  .share_p1 {
    font-size: px2rem(36);
    color: #fff;
    margin: px2rem(110) 0 px2rem(30) 0;
  }
  .share_p2 {
    font-size: px2rem(30);
    color: #fff;
  }
}
</style>

