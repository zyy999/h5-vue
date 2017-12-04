<template>
   <div class="footer">
            <div class="footer-left">
                <div class="footer-bg talk" v-on:click="loginChange"></div>
                <div class="footer-bg share" v-on:click="shareChange"></div>
            </div>
            <div class="footer-right">
                <div class="footer-bg vip" v-on:click="downloadChange"></div>
                <div class="footer-bg gift" v-on:click="giftChanage"></div>
                <div class="footer-bg sun" v-on:click="downloadChange"></div>
            </div>
        </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'foot',
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
    ...mapMutations([
      'loginChange',
      'downloadChange',
      'shareChange',
      'giftChanage'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/common/px2rem.scss";
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: px2rem(70);
  z-index: 2;
  padding: px2rem(20) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .footer-left {
    display: flex;
    justify-content: flex-start;
  }
  .footer-right {
    display: flex;
    justify-content: flex-end;
  }
  .footer-bg {
    height: px2rem(70);
    width: px2rem(70);
    border-radius: 50%;
    margin-left: px2rem(20);
  }
  .talk {
    background: url("../../assets/image/live-chat.png") no-repeat;
    background-size: cover;
  }
  .share {
    background: url("../../assets/image/live-share.png") no-repeat;
    background-size: cover;
  }
  .vip {
    background: url("../../assets/image/live-vip.png") no-repeat;
    background-size: cover;
  }
  .gift {
    background: url("../../assets/image/live-gift.png") no-repeat;
    background-size: cover;
  }
  .sun {
    margin-right: px2rem(20);
    background: url("../../assets/image/live-sun.png") no-repeat;
    background-size: cover;
  }
}
</style>

