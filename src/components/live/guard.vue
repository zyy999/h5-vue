<template>
    <div class="guard">
            <ul>
                <li>
                    <img src="/static/image/temp.jpg">
                    <i class="guard-icon icon-zs"></i>
                </li>
                <li>
                    <img src="/static/image/temp.jpg">
                    <i class="guard-icon icon-hj"></i>
                </li>
                <li>
                    <img src="/static/image/temp.jpg">
                    <i class="guard-icon icon-by"></i>
                </li>
                <li>
                    <img src="/static/image/temp.jpg">
                    <i class="guard-icon icon-qt"></i>
                </li>
                <li>
                    <img src="/static/image/temp.jpg">
                    <i class="guard-icon icon-zs"></i>
                </li>
            </ul>
        </div>
</template>
<script>
  export default {
    name: 'guard'
  }
</script>
<style lang="scss" scoped>
@import "../../assets/css/common/px2rem.scss";
.guard {
  position: absolute;
  top: px2rem(20);
  right: px2rem(70);
  width: px2rem(332);
  height: px2rem(60);
  overflow: hidden;
  z-index: 2;
  ul {
    width: px2rem(380);
    li {
      float: left;
      width: px2rem(60);
      height: px2rem(60);
      line-height: px2rem(38);
      text-align: center;
      background: #fff;
      border-radius: 50%;
      list-style: none;
      position: relative;
      margin-right: px2rem(20);
      img {
        width: px2rem(56);
        height: px2rem(56);
        border-radius: 50%;
        display: inline-block;
      }
      .guard-icon {
        display: inline-block;
        width: px2rem(20);
        height: px2rem(24);
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .icon-zs {
        background: url("../../assets/image/icon_zs.png") no-repeat;
        background-size: cover;
      }
      .icon-hj {
        background: url("../../assets/image/icon_hj.png") no-repeat;
        background-size: cover;
      }
      .icon-by {
        background: url("../../assets/image/icon_by.png") no-repeat;
        background-size: cover;
      }
      .icon-qt {
        background: url("../../assets/image/icon_qt.png") no-repeat;
        background-size: cover;
      }
    }
  }
  ul li:last-child {
    margin-right: 0;
  }
}
</style>

