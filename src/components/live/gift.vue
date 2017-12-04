<template>
  <div class="gifts"><!-- v-show="giftListSwitch"-->
            <div class="nav-box">
                <ul>
                    <li class="act">
                        <a href="javascript:void(0);">金币礼物</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">背包</a>
                    </li>

                </ul>
                <div class="gifts-close" v-on:click="giftChanage"></div>
            </div>
            <div class="gift-box">
                <div class="gift-list">
                    <ul>
                        <li>
                            <div class="img-box">
                                <img src="/static/image/gift_img.png">
                                <span>守护</span>
                            </div>
                            <div class="img-txt">
                                <p class="gift-name">礼物名称</p>
                                <p class="gift-money">200金币/钻石</p>
                            </div>
                            <span class="icon-jie-green"></span>
                            <span class="gift-nums">9999+</span>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="/static/image/gift_img.png">
                                <span>守护</span>
                            </div>
                            <div class="img-txt">
                                <p class="gift-name">礼物名称</p>
                                <p class="gift-money">200金币/钻石</p>
                            </div>
                            <span class="icon-jie-pink"></span>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="/static/image/gift_img.png">
                                <span>守护</span>
                            </div>
                            <div class="img-txt">
                                <p class="gift-name">礼物名称</p>
                                <p class="gift-money">200金币/钻石</p>
                            </div>
                            <span class="icon-jie-pink"></span>
                        </li>
                        <li class="act">
                            <div class="img-box">
                                <img src="/static/image/gift_img.png">
                                <span>守护</span>
                            </div>
                            <div class="img-txt">
                                <p class="gift-name">礼物名称</p>
                                <p class="gift-money">200金币/钻石</p>
                            </div>
                            <span class="icon-jie-pink"></span>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="/static/image/gift_img.png">
                                <span>守护</span>
                            </div>
                            <div class="img-txt">
                                <p class="gift-name">礼物名称</p>
                                <p class="gift-money">200金币/钻石</p>
                            </div>
                            <span class="icon-jie-pink"></span>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="/static/image/gift_img.png">
                                <span>守护</span>
                            </div>
                            <div class="img-txt">
                                <p class="gift-name">礼物名称</p>
                                <p class="gift-money">200金币/钻石</p>
                            </div>
                            <span class="icon-jie-pink"></span>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="/static/image/gift_img.png">
                                <span>守护</span>
                            </div>
                            <div class="img-txt">
                                <p class="gift-name">礼物名称</p>
                                <p class="gift-money">200金币/钻石</p>
                            </div>
                            <span class="icon-jie-pink"></span>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="/static/image/gift_img.png">
                                <span>守护</span>
                            </div>
                            <div class="img-txt">
                                <p class="gift-name">礼物名称</p>
                                <p class="gift-money">200金币/钻石</p>
                            </div>
                            <span class="icon-jie-pink"></span>
                        </li>
                    </ul>
                </div>
                <div class="gift-btn">
                    <ul>
                        <li class="act"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div class="bottom-box">
                <a href="javascript:void(0)" class="recharge-btn">充值</a>
                <p class="bottom-box-p"><i class="icon-gold"></i><span>{{ user.gold }}</span></p>
                <p class="bottom-box-p"><i class="icon-zuan"></i><span>{{ user.diamond }}</span></p>
                <div class="select-nums">
                    <div class="select-nums-text">
                        <input v-model="num">
                        <i class="icon-arrup" @click="selectNumListShow"></i>
                    </div>
                    <div class="select-nums-list" v-show="selectNumListSwitch">
                        <ul>
                            <li v-for="(numList,key) in selectNumList" :key="key" @click="numListSelect(key)" v-bind:class="{ act:key === num }">{{ key }}</li>
                        </ul>
                    </div>
                </div>
                <a href="javascript:void(0)" class="gifts-btn">赠送</a>
            </div>
        </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'gift',
  computed: {
    ...mapState({
      loginDialogSwitch: state => state.status.loginDialogSwitch,
      downloadDialogSwitch: state => state.status.downloadDialogSwitch,
      giftListSwitch: state => state.status.giftListSwitch,
      shareDialogSwitch: state => state.status.shareDialogSwitch,
      inputDialogSwitch: state => state.status.inputDialogSwitch,
      selectNumList: state => state.gift.selectNumList,
      gift_list: state => state.gift.gift_list,
      user: state => state.user.user,
      selectNumListSwitch: state => state.gift.selectNumListSwitch,
      num: state => state.gift.num
    })
  },
  methods: {
    ...mapMutations([
      'loginChange',
      'downloadChange',
      'shareChange',
      'giftChanage',
      'selectNumListShow',
      'numListSelect'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/common/px2rem.scss";
.gifts {
  width: 100%;
  /*height:px2rem(667);*/
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 6;
  background: url("../../assets/image/gift-lisg-bg.png") repeat;
}
.nav-box {
  //border-bottom:px2rem(1) solid #707070;
  height: px2rem(81);
  line-height: px2rem(81);
  ul {
    overflow: hidden;
    float: left;
    li {
      list-style: none;
      float: left;
      padding: 0 px2rem(45);
      a {
        height: px2rem(55);
        line-height: px2rem(81);
        display: block;
        text-decoration: none;
        font-size: px2rem(30);
        color: #fff;
        border-bottom: px2rem(2) solid #fff;
        text-align: center;
        padding-bottom: px2rem(10);
      }
    }
    li.act {
      a {
        color: #ffaf08;
        border-bottom: px2rem(2) solid #ffaf08;
      }
    }
  }
  .gifts-close {
    width: px2rem(54);
    height: px2rem(54);
    background: url("../../assets/image/gift-close.png") no-repeat;
    background-size: cover;
    float: right;
    margin: px2rem(10) px2rem(20) 0 0;
  }
}
.gift-box {
  width: 100%;
  .gift-list {
    border-bottom: px2rem(1) solid #404040;
    ul {
      overflow: hidden;
      li {
        list-style: none;
        width: px2rem(185);
        height: px2rem(260);
        border-top: px2rem(1) solid #404040;
        border-right: px2rem(1) solid #404040;
        border-bottom: px2rem(1) solid rgba(0, 0, 0, 0);
        float: left;
        position: relative;
        /*line-height:px2rem(248);*/
        text-align: center;
        .img-box {
          position: relative;
          margin-top: px2rem(35);
          img {
            width: px2rem(120);
          }
          span {
            color: #fff;
            font-size: px2rem(20);
            position: absolute;
            bottom: 0;
            left: 35%;
            padding: px2rem(3) px2rem(6);
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: px2rem(5);
          }
        }
        .img-txt {
          margin-top: px2rem(12);
          line-height: px2rem(35);
          .gift-name {
            color: #fff;
            font-size: px2rem(28);
          }
          .gift-money {
            color: #777;
            font-size: px2rem(18);
          }
        }
        .icon-jie-green {
          position: absolute;
          left: 0;
          top: 0;
          display: inline-block;
          width: px2rem(48);
          height: px2rem(48);
          background: url("../../assets/image/gift_jie_green.png") no-repeat;
          background-size: cover;
        }
        .icon-jie-pink {
          position: absolute;
          left: 0;
          top: 0;
          display: inline-block;
          width: px2rem(48);
          height: px2rem(48);
          background: url("../../assets/image/gift_jie_pink.png") no-repeat;
          background-size: cover;
        }
        .gift-nums {
          color: #fff;
          font-size: px2rem(20);
          background: #5a52c3;
          padding: px2rem(4) px2rem(6);
          border-radius: px2rem(20);
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      li.act {
        border: px2rem(1) solid #ffbf39;
        width: px2rem(182);
        height: px2rem(260);
      }
    }
  }
  .gift-btn {
    height: px2rem(30);
    line-height: px2rem(30);
    position: relative;
    ul {
      height: px2rem(30);
      line-height: px2rem(30);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      li {
        float: left;
        list-style: none;
        width: px2rem(10);
        height: px2rem(10);
        background: #777;
        border-radius: 50%;
        text-align: center;
        margin: px2rem(10) px2rem(5);
      }
    }
    ul li.act {
      background: #fff;
    }
  }
}
.bottom-box {
  height: px2rem(98);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .recharge-btn {
    width: px2rem(128);
    height: px2rem(48);
    background: #ed6d00;
    color: #fff;
    font-size: px2rem(30);
    line-height: px2rem(48);
    text-align: center;
    display: block;
    text-decoration: none;
    border-radius: px2rem(33);
    margin-left: px2rem(20);
  }
  .bottom-box-p {
    color: #fff;
    font-size: px2rem(26);
    width: px2rem(150);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .icon-gold {
    display: inline-block;
    width: px2rem(30);
    height: px2rem(30);
    background: url("../../assets/image/icon_gold.png") no-repeat;
    background-size: cover;
  }
  .icon-zuan {
    display: inline-block;
    width: px2rem(30);
    height: px2rem(25);
    background: url("../../assets/image/icon_zuan.png") no-repeat;
    background-size: cover;
  }
  .gifts-btn {
    width: px2rem(128);
    height: px2rem(48);
    background: #863ff1;
    color: #fff;
    font-size: px2rem(30);
    line-height: px2rem(48);
    text-align: center;
    display: block;
    text-decoration: none;
    border-radius: px2rem(33);
    margin-right: px2rem(20);
  }
  .select-nums {
    position: relative;
    /*width: px2rem(128);*/
    .select-nums-text {
      border: px2rem(1) solid #fff;
      border-radius: px2rem(30);
      padding: 0 px2rem(10);
      width: px2rem(80);
      height: px2rem(50);
      display: flex;
      align-items: center;
      justify-content: space-around;
      input {
        height: px2rem(48);
        line-height: px2rem(48);
        width: px2rem(56);
        border: 0;
        background: transparent;
        color: #fff;
        outline: none;
        text-align: center;
      }
      .icon-arrup {
        display: inline-block;
        width: px2rem(18);
        height: px2rem(10);
        background: url("../../assets/image/gift_arrup.png") no-repeat;
        background-size: cover;
      }
    }
    .select-nums-list {
      position: absolute;
      z-index: 3;
      width: px2rem(120);
      background-color: rgba(0, 0, 0, 0.9);
      color: #fff;
      border-radius: px2rem(10);
      left: 0;
      bottom: px2rem(65);
      padding: 0 px2rem(10);
      ul li {
        font-size: px2rem(22);
        list-style: none;
        height: px2rem(40);
        line-height: px2rem(40);
        color: #ccc;
        border-bottom: px2rem(1) solid #313131;
        text-align: center;
      }
      ul li:last-child {
        border-bottom: 0;
      }
    }
    .select-nums-list .act {
      color: #ffaf08;
    }
    .select-nums-list:after {
      content: "";
      display: inline-block;
      left: px2rem(40);
      position: absolute;
      width: px2rem(11);
      height: px2rem(7);
      background: url("../../assets/image/gift-list-sj.png") no-repeat;
      background-size: cover;
    }
  }
}
</style>

