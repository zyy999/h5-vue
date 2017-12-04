<template>
   <div class="chat">
            <p class="notice">系统消息：我们倡导绿色直播，对直播内容24小时在线巡查，请大家文明发言，和谐直播环境，我们一起努力。</p>
            <ul>
                <!-- <li>
                    <span>台湾黄晓明爱Baby</span><br>不是缩好一起直播的嘛哈你造吗呀 虽然你酱紫与但我还是很宣你嗳挪
                </li> -->
            </ul>
        </div>
</template>
<script>
export default {
  name: 'chat'
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/common/px2rem.scss";
.chat {
  position: absolute;
  bottom: px2rem(160);
  left: px2rem(26);
  width: px2rem(529);
  height: px2rem(360);
  overflow: auto;
  z-index: 2;
  .notice {
    color: #feb006;
    font-size: px2rem(30);
    letter-spacing: px2rem(1);
    line-height: px2rem(34);
  }
  ul li {
    color: #ffffff;
    font-size: px2rem(26);
    letter-spacing: px2rem(1);
    line-height: 1.4;
    margin-bottom: px2rem(23);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: px2rem(15);
    padding: px2rem(6);
    span {
      font-size: px2rem(24);
    }
  }
}
</style>

