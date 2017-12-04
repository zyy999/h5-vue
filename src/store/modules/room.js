import * as api from '../../api'
import * as types from './mutation-types'

const state = {
  room_obj: null,
  user_guard_list: null,
  h5_animation_url: null,
  share_config: null,
  gift_list: null,
  active_obj_list: null,
  group_head_user_obj: null,
  enter_room_message: null,
  animation_source_path: null,
  identity_obj: null
}

const mutations = {
  [types.ENTER_ROOM] (state, payload) {
    for (const prop in payload) {
      state[prop] = payload[prop]
    }
  },
  [types.RESET_ROOM] (state, payload) {
    for (const prop in state) {
      state[prop] = null
    }
  }
}

const getters = {}

const actions = {
  enterRoom ({ commit, state }, payload) {
    commit(types.RESET_ROOM)
    api.enterRoom({ room_id: payload.room_id }, (err, res) => {
      if (err) {
        console.log(err)
        return
      }
      commit(types.ENTER_ROOM, res.data.result)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
