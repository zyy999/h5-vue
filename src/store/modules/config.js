import * as api from '../../api'
import * as types from './mutation-types'

const state = {
  imagePath: ''
}

const mutations = {
  [types.SET_CONFIG] (state, payload) {
    state.imagePath = payload.image_path
  }
}

const getters = {}

const actions = {
  getConfig ({ commit, state }) {
    api.getConfig((err, res) => {
      if (err) return
      commit(types.SET_CONFIG, res.data.result.config)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
