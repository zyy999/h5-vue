import * as api from '../../api'
import * as types from './mutation-types'

const state = {
  rooms: [],
  tags: [],
  loading: false
}

const mutations = {
  [types.UPDATE_ROOM] (state, payload) {
    state.rooms = payload.rooms
    state.tags = payload.tags
  }
}

const getters = {
  rooms: state => {
    return state.rooms.map(room => {
      const tag = state.tags.find(tag => tag.id === room.column_id)
      return Object.assign({}, room, {
        tag
      })
    })
  }
}

const actions = {
  getRooms ({ commit, state }) {
    state.loading = true
    api.index((err, res) => {
      console.log(err, res)
      state.loading = false
      const rooms = err ? [] : res.data.result.column_related_list
      const tags = err ? [] : res.data.result.index_column
      commit(types.UPDATE_ROOM, { rooms, tags })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
