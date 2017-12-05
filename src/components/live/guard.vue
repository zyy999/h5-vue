<template>
    <div class="guard" v-show="show">
      <ul>
        <li v-for="item in guards" :key="item.id">
          <img :src="imagePath + item.small_head_url">
          <i :class="iconClass(item.user_guard_obj.guard_rank)"></i>
        </li>
      </ul>
      <div class="close" @click="$emit('hideGuards')" v-show="guards.length > 0"></div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "guard",
  props: ["guards", "show"],
  computed: {
    ...mapState({
      imagePath: state => state.config.imagePath
    })
  },
  methods: {
    iconClass(guard_rank) {
      let c = "";
      switch (guard_rank) {
        case 1:
          c = "icon-qt";
          break;

        case 2:
          c = "icon-by";
          break;

        case 3:
          c = "icon-hj";
          break;

        case 4:
          c = "icon-zs";
          break;
      }
      return "guard-icon " + c;
    }
  }
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
  z-index: 2;
  ul {
    width: 100%;
    height: px2rem(60);
    overflow: hidden;
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

  .close {
    position: absolute;
    top: px2rem(16);
    right: px2rem(-30);
    display: inline-block;
    width: px2rem(32);
    height: px2rem(31);
    background: url("../../assets/image/live-close.png") no-repeat;
    background-size: cover;
    z-index: 2;
  }
}
</style>

