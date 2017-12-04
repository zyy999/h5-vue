import Vue from 'vue'
import Vuex from 'vuex'

import hot from './modules/hot'
import charge from './modules/charge'
import gift from './modules/gift'
import message from './modules/message'
import room from './modules/room'
import user from './modules/user'
import status from './modules/status'
import config from './modules/config'
import pubvar from './modules/pubvar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    pubvar,
    hot,
    charge,
    gift,
    message,
    room,
    user,
    status
  }
})
