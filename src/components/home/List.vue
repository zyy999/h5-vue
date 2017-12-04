<template>
<div>
  <div class="head">
    <div class="logo">
      <img src="../../assets/image/logo.png">
      <h2 class="title">大王直播</h2>
    </div>
    <div class="head-right">
      <div class="center">
        <p v-if="logined" class="welcome">欢迎 {{ user.name }}</p>
        <a v-else @click="login" href="javascript:void(0)" class="sign" style="display:block;">登录</a>
        <a @click.prevent="showRecharge=true" class="recharge">充值</a>
      </div>
      <div class="download" @click.prevent="showDownload=true">下载直播APP</div>
    </div>
  </div>

  <Hot/>
  <Recharge :show="showRecharge" @hideRecharge="showRecharge=false"/>
  <Download :show="showDownload" @hideDownload="showDownload=false"/>
</div>
</template>

<script>
  import axios from 'axios'
  import Hot from './Hot'
  import Recharge from '../common/Recharge'
  import Download from '../common/Download'
  import { mapState } from 'vuex'

  export default {
    name: 'List',
    data () {
      return {
        showRecharge: false,
        showDownload: false
      }
    },
    computed: {
      ...mapState({
        user: state => state.user.user
      }),
      logined: function () {
        return !!this.user
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login')
      },
      login2 () {
        const that = this

        axios.get('/login')
        .then(function (res) {
          that.user = res.data.user
        })
        .catch(err => {
          console.log(err)
        })
      },
      goRoom (id) {
        this.$router.push({
          name: 'room',
          params: {
            id: id
          }
        })
      }
    },
    components: {
      Hot,
      Recharge,
      Download
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/common/px2rem.scss';

  .head {
    width: 100%;
    background: #f7f7f7;
    padding: px2rem(20) 0 px2rem(20) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      height: px2rem(60);
      width: px2rem(190);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: px2rem(20);
      img {
        width: px2rem(57);
        height: px2rem(60);
      }
      .title {
        color: #353535;
        font-size: px2rem(30);
        font-family: '微软雅黑';
      }
    }
    .head-right {
      display: flex;
      .center {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        a {
          width: px2rem(90);
          height: px2rem(46);
          background: #fe4a89;
          color: #fff;
          font-size: px2rem(24);
          text-decoration: none;
          text-align: center;
          line-height: px2rem(46);
          border-radius: px2rem(50);
          margin-right: px2rem(25);
        }
        .welcome {
          font-size: px2rem(26);
          color: #353535;
          margin-right: px2rem(25);
        }
      }
      .download {
        width: px2rem(170);
        height: px2rem(48);
        border: px2rem(2) solid #353535;
        border-radius: px2rem(50);
        color: #353535;
        font-size: px2rem(24);
        text-align: center;
        line-height: px2rem(48);
        margin-right: px2rem(20);
      }
    }
  }
</style>
