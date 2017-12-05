<template>
  <div class="wrap">
    <!-- <div>live room {{$route.params.id}}</div> -->
    <div class="bg"></div>
    <div class="mask"></div>

    <app-follow :anchor="anchor"></app-follow>
    <app-heat :heat="heat"></app-heat>
    <app-guard :guards="guards" :show="showGuards" @hideGuards="showGuards=false"></app-guard>

    <app-chat></app-chat>

    <div class="into-msg"><p>海淀波斯猫 进入直播间！</p></div>

    <app-foot></app-foot>

    <div class="no-anchor" style="display:none;"><p>主播暂时未开播，去其他直播间逛逛吧</p></div>
    <div class="bad-network" style="display:none;">
      <img src="../../assets/image/no-network.png">
      <p>您的网络不给力哦～</p>
    </div>
    <div class="no-network" style="display:none;"><p>您的网络已断开，请检查网络</p></div>
    <div class="follow-ok" style="display:none;">关注成功</div>

    <app-share></app-share>
    <app-gift></app-gift>
    <div class="download-popup" v-bind:style="{ display : (downloadDialogSwitch?'block':'none') }">
      <div class="close" v-on:click="downloadChange"></div>
      <img src="../../assets/image/logo.png" class="down-img">
      <p class="p1">大王直播</p>
      <p class="p2">泛娱乐直播平台</p>
      <p class="p3">下载大王直播APP<br>享受更多亲密特权</p>
      <a class="download-btn" href="javascript:void(0);">立即下载</a>
    </div>
    <div class="download-popup" v-bind:style="{ display : (loginDialogSwitch?'block':'none') }">
      <div class="close" v-on:click="loginChange"></div>
      <img src="../../assets/image/logo.png" class="down-img">
      <p class="p1">大王直播</p>
      <p class="p2">泛娱乐直播平台</p>
      <p class="p3">登录后才可以跟主播互动哦！</p>
      <a class="download-btn" href="javascript:void(0);">去登录</a>
    </div>
  </div>
</template>

<script>
import AppFollow from '@/components/live/follow'
import AppHeat from '@/components/live/heat'
import AppGuard from '@/components/live/guard'
import AppChat from '@/components/live/chat'
import AppFoot from '@/components/live/foot'
import AppShare from '@/components/live/share'
import AppGift from '@/components/live/gift'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'live',
  data () {
    return {
      showGuards: true
    }
  },
  computed: {
    ...mapState({
      loginDialogSwitch: state => state.status.loginDialogSwitch,
      downloadDialogSwitch: state => state.status.downloadDialogSwitch,
      giftListSwitch: state => state.status.giftListSwitch,
      shareDialogSwitch: state => state.status.shareDialogSwitch,
      inputDialogSwitch: state => state.status.inputDialogSwitch,

      room: state => state.room
    }),
    heat () {
      return this.room.room_obj ? this.room.room_obj.curr_hot_num : null
    },
    anchor () {
      return this.room.room_obj ? this.room.room_obj.anchor_obj : null
    },
    guards () {
      return this.room.user_guard_list ? this.room.user_guard_list : null
    }
  },
  methods: {
    ...mapMutations(['loginChange', 'downloadChange']),
    enterRoom () {
      this.$store.dispatch('enterRoom', { room_id: this.$route.params.id })
    }
  },
  components: {
    'app-follow': AppFollow,
    'app-heat': AppHeat,
    'app-guard': AppGuard,
    'app-chat': AppChat,
    'app-foot': AppFoot,
    'app-gift': AppGift,
    'app-share': AppShare
  },
  created: function () {
    this.enterRoom()
  },
  watch: {
    '$route': 'enterRoom'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/css/common/px2rem.scss";
body {
  height: 100%;
}
#app {
  height: 100%;
}
.blur {
  filter: blur(3px);
}
.bg {
  background: url("../../assets/image/live_bg.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.mask {
  display: none;
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.main {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.into-msg {
  position: absolute;
  bottom: px2rem(110);
  left: px2rem(26);
  width: px2rem(460);
  z-index: 2;
  p {
    color: #ffffff;
    letter-spacing: px2rem(1);
    font-size: px2rem(30);
  }
}
.no-anchor {
  position: absolute;
  width: 100%;
  top: 50%;
  color: #fff;
  font-size: px2rem(26);
  letter-spacing: px2rem(1);
  text-align: center;
  z-index: 3;
}
.close {
  position: absolute;
  top: px2rem(35);
  right: px2rem(18);
  display: inline-block;
  width: px2rem(32);
  height: px2rem(31);
  background: url("../../assets/image/live-close.png") no-repeat;
  background-size: cover;
  z-index: 2;
}
.bad-network {
  position: absolute;
  top: 35%;
  text-align: center;
  width: 100%;
  z-index: 3;
  img {
    width: px2rem(70);
    height: px2rem(70);
  }
  p {
    font-size: px2rem(32);
    color: #fff;
    margin-top: px2rem(20);
    letter-spacing: px2rem(1);
  }
}
.no-network {
  position: absolute;
  width: 100%;
  top: 50%;
  color: #fff;
  font-size: px2rem(26);
  letter-spacing: px2rem(1);
  text-align: center;
  z-index: 3;
}
.follow-ok {
  position: absolute;
  z-index: 3;
  top: 45%;
  left: 50%;
  margin-left: px2rem(130, false);
  width: px2rem(260);
  height: px2rem(88);
  font-size: px2rem(32);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: px2rem(10);
  text-align: center;
  line-height: px2rem(88);
}
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
    margin-top: px2rem(30);
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
    margin-bottom: px2rem(34);
    margin-top: px2rem(30);
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
