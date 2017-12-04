<template>
  <div v-show="show" class="recharge-popup">
    <p class="title">充值</p>
    <div @click="$emit('hideRecharge')" class="close"></div>
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
</template>

<script>
export default {
  name: 'Recharge',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../../assets/css/common/px2rem.scss';

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

