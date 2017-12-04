<template>
<div>
  <div class="label">
    <h2>热门</h2>
    <span class="line"></span>
  </div>
  <div v-if="rooms.length" class="list">
    <div class="introduce" v-for="room in rooms" :key="room.id" @click="goRoom(room.id)">
      <div class="status" v-if="room.tag">{{ room.tag.name }}</div>
      <img :src="imagePath + room.max_img_path" width="100%">
      <p class="info"><span class="username">{{ room.anchor_obj.nickname }}</span><span class="people">{{room.curr_online_num}}人</span></p>
    </div>
  </div>
  <div class="loading" v-show="loading">加载中...</div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      tags: state => state.hot.tags,
      loading: state => state.hot.loading,
      imagePath: state => state.config.imagePath
    }),
    ...mapGetters({
      rooms: 'rooms'
    })
  },
  methods: {
    handleScroll () {
      const view = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      const scroll = window.pageYOffset || document.documentElement.scrollTop
      const height = document.body.clientHeight

      if ((view + scroll) >= height && !this.loading) {
        this.$store.dispatch('getRooms')
      }
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
  created: function () {
    if (this.rooms.length === 0) this.$store.dispatch('getRooms')
    // window.addEventListener('scroll', this.handleScroll)
  },
  desoroyed: function () {
    // window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common/px2rem.scss";

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

.loading {
  position: fixed;
  left: 50%;
  margin-left: px2rem(-54);
  top: 50%;
  margin-top: px2rem(-18);
  font-size: px2rem(36);
}
</style>
