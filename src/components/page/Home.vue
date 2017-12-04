<template>
  <div class="wrap">
    <div class="head">
      <div class="logo">
        <img src="../../assets/image/logo.png">
        <h2 class="title">大王直播</h2>
      </div>
      <div class="head-right">
        <div class="center">
          <p class="welcome" style="display:none;">欢迎 小猫咪...</p>
          <a href="javascript:void(0)" class="sign" style="display:block;">登录</a>
          <a href="javascript:void(0)" class="recharge">充值</a>
        </div>
        <div class="download">下载直播APP</div>
      </div>
    </div>
    <div class="label">
      <h2>热门</h2>
      <span class="line"></span>
    </div>
    <div class="list">
      <div class="introduce">
        <div class="status">嗨聊中</div>
        <img src="/static/image/temp.jpg" width="100%">
        <p class="info"><span class="username">格格别闹</span><span class="people">2.4万人</span></p>
      </div>
      <div class="introduce">
        <div class="status">嗨聊中</div>
        <img src="/static/image/temp.jpg" width="100%">
        <p class="info"><span class="username">格格别闹</span><span class="people">2.4万人</span></p>
      </div>
      <div class="introduce">
        <div class="status">嗨聊中</div>
        <img src="/static/image/temp.jpg" width="100%">
        <p class="info"><span class="username">格格别闹</span><span class="people">2.4万人</span></p>
      </div>
      <div class="introduce">
        <div class="status">嗨聊中</div>
        <img src="/static/image/temp.jpg" width="100%">
        <p class="info"><span class="username">格格别闹</span><span class="people">2.4万人</span></p>
      </div>
      <div class="introduce">
        <div class="status">嗨聊中</div>
        <img src="/static/image/temp.jpg" width="100%">
        <p class="info"><span class="username">格格别闹</span><span class="people">2.4万人</span></p>
      </div>
      <div class="introduce">
        <div class="status">嗨聊中</div>
        <img src="/static/image/temp.jpg" width="100%">
        <p class="info"><span class="username">格格别闹</span><span class="people">2.4万人</span></p>
      </div>
      <div class="introduce">
        <div class="status">嗨聊中</div>
        <img src="/static/image/temp.jpg" width="100%">
        <p class="info"><span class="username">格格别闹</span><span class="people">2.4万人</span></p>
      </div>
      <div class="introduce">
        <div class="status">嗨聊中</div>
        <img src="/static/image/temp.jpg" width="100%">
        <p class="info"><span class="username">格格别闹</span><span class="people">2.4万人</span></p>
      </div>
    </div>
    <div class="nav">
      <li><i class="follow"></i><a href="javascript:void(0);">关注</a></li>
      <li><i class="home"></i><a href="javascript:void(0);">首页</a></li>
      <li><i class="self"></i><a href="javascript:void(0);">我的</a></li>
    </div>

    <div class="sign-ok" style="display:none;">登录成功</div>
    <div class="mask" style="display: none;"></div>
    <div class="download-popup" style="display:none;">
      <div class="close"></div>
      <img src="../../assets/image/logo.png" class="down-img">
      <p class="p1">大王直播</p>
      <p class="p2">泛娱乐直播平台</p>
      <p class="p3">下载大王直播APP<br>享受更多亲密特权</p>
      <a class="download-btn" href="javascript:void(0);">立即下载</a>
    </div>
    <div class="recharge-popup" style="display:none;">
      <p class="title">充值</p>
      <div class="close"></div>
      <ul class="rech-list">
        <li>
          <span class="gold"><i class="i-gold"></i>1000金币</span>
          <a href="javascript:void(0);" class="rech-btn">￥1</a>
        </li>
        <li>
          <span class="gold"><i class="i-gold"></i>10000金币</span>
          <a href="javascript:void(0);" class="rech-btn">￥10</a>
        </li>
        <li>
          <span class="gold"><i class="i-gold"></i>20000金币</span>
          <a href="javascript:void(0);" class="rech-btn">￥20</a>
        </li>
        <li>
          <span class="gold"><i class="i-gold"></i>50000金币</span>
          <a href="javascript:void(0);" class="rech-btn">￥50</a>
        </li>
        <li>
          <span class="gold"><i class="i-gold"></i>100000金币</span>
          <a href="javascript:void(0);" class="rech-btn">￥100</a>
        </li>
        <li>
          <span class="gold"><i class="i-gold"></i>500000金币</span>
          <a href="javascript:void(0);" class="rech-btn">￥500</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageHome'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/css/common/px2rem.scss';

  .wrap {
    background: #fff;
    position: relative;
  }

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

  .label {
    height: px2rem(90);
    line-height: px2rem(90);
    text-align: center;
    position: relative;
    h2 {
      height: px2rem(90);
      font-size: px2rem(36);
      color: #353535;
    }
    .line {
      position: absolute;
      width: px2rem(36);
      height: px2rem(5);
      background: #fe4a89;
      border-radius: px2rem(10);
      left: 50%;
      margin-left: px2rem(18, false);
      bottom: px2rem(16);
    }
  }

  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    .introduce {
      width: px2rem(374);
      height: px2rem(374);
      overflow: hidden;
      position: relative;
      margin-bottom: px2rem(2);
    }

    .status {
      width: px2rem(112);
      height: px2rem(38);
      position: absolute;
      right: px2rem(16);
      top: px2rem(16);
      background-color: rgba(171, 173, 164, 0.5);
      border: 2px solid #ffffff;
      border-radius: px2rem(38);
      color: #ffffff;
      line-height: px2rem(38);
      text-align: center;
      font-size: px2rem(20);
    }
    .info {
      position: absolute;
      left: 0;
      bottom: px2rem(14);
      font-size: px2rem(22);
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: space-between;
      span {
        text-shadow: #000 0 px2rem(1) 0;
      }
      .username {
        margin-left: px2rem(14);
      }
      .people {
        margin-right: px2rem(14);
      }
    }
  }

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
    }
  }

  .sign-ok {
    width: px2rem(260);
    height: px2rem(88);
    line-height: px2rem(88);
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    font-size: px2rem(32);
    color: #fff;
    border-radius: px2rem(10);
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: px2rem(44, false);
    margin-left: px2rem(130, false);
    z-index: 3;
  }

  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
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
      background:url('../../assets/image/close.png') center center;
      position: absolute;
      right: px2rem(20);
      top: px2rem(20);
    }
  }

  .recharge-popup {
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    .title {
      height: px2rem(92);
      width: 100%;
      color: #353535;
      font-size: px2rem(34);
      text-align: center;
      line-height: px2rem(92);
    }
    .close {
      width: px2rem(30);
      height: px2rem(30);
      background: #ccc;
      position: absolute;
      right: px2rem(20);
      top: px2rem(30);
    }
    .rech-list {
      li {
        height: px2rem(108);
        line-height: px2rem(108);
        width: 100%;
        border-top: px2rem(1) solid #ededed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .gold {
          color: #999;
          font-size: px2rem(30);
          margin-left: px2rem(40);
          display: flex;
          align-items: center;
          .i-gold {
            display: inline-block;
            width: px2rem(35);
            height: px2rem(35);
            background: #ddd;
            margin-right: px2rem(14);
          }
        }
        .rech-btn {
          display: inline-block;
          font-size: px2rem(28);
          color: #fe4a89;
          width: px2rem(134);
          height: px2rem(56);
          line-height: px2rem(56);
          border: px2rem(1) solid #fe4a89;
          border-radius: px2rem(50);
          text-decoration: none;
          text-align: center;
          margin-right: px2rem(40);
        }
      }
    }
  }
</style>
