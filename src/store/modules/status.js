export default {
  state: {
    loginDialogSwitch: false,       // 登录对话框  的显示和隐藏   还有是否登录的判断
    downloadDialogSwitch: false,    // 下载对话框
    giftListSwitch: false,          // 礼物列表
    shareDialogSwitch: false,        // 分享对话框
    inputDialogSwitch: false        // 聊天输入对话框
  },
  mutations: {
    loginChange (state) {
      if (state.loginDialogSwitch === false) {
        state.loginDialogSwitch = true
      } else {
        state.loginDialogSwitch = false
      }
    },
    downloadChange (state) {
      if (state.downloadDialogSwitch === false) {
        state.downloadDialogSwitch = true
      } else {
        state.downloadDialogSwitch = false
      }
    },
    giftChanage (state) {
      if (state.giftListSwitch === false) {
        state.giftListSwitch = true
      } else {
        state.giftListSwitch = false
      }
    },
    shareChange (state) {
      if (state.shareDialogSwitch === false) {
        state.shareDialogSwitch = true
      } else {
        state.shareDialogSwitch = false
      }
    },
    inputChange (state) {
      if (state.inputDialogSwitch === false) {
        state.inputDialogSwitch = true
      } else {
        state.inputDialogSwitch = false
      }
    }
  }
}
