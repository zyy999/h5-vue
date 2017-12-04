import * as api from '../../api'
import * as types from './mutation-types'

const userFake = {
  'id': '20000020',
  'nickname': 'æˆ‘çš„å¤©é‚£12',
  'introduction': '',
  'email': '',
  'login_name': '18235107840',
  'small_head_url': '/images/heads/50/c1/20160715135953344.png',
  'mobilephone': '18235107840',
  'gold': 52,
  'diamond': 1353,
  'ticket': 43000,
  'user_rank': 5,
  'user_experience': 13210,
  'current_rank_user_need_total_experience': 50000,
  'anchor_rank': 0,
  'anchor_experience': 0,
  'current_rank_anchor_need_total_experience': 1,
  'sun_num': 50,
  'follow_num': 0,
  'user_guard_obj': {
    'user_id': '',
    'expire_time': '',
    'guard_rank': 0
  },
  'intimacy_obj': {
    'intimacy_experience': 0,
    'intimacy_rank': 0,
    'intimacy_next_experience': 0,
    'intimacy_level_obj': null
  },
  'user_signin_obj': null,
  'user_type': 1,
  'identity': 'gBdJpCyl7dZ4vfLPJ1dAxbZRq3YCblMBuxd29LSxV6jsg6bKe9BdTGW25nvrQ5loDIwdcn7PskZa887jCtD2TlXCZTjuXoJcozD7Dp7QU8FKKLjcV0H35ZE0egNZ1tmq7RV0YG7cx2oFdARlttFSiMDQpzA00BNjtsmOtfB8+TBkCMxn6VtH+6u5N0BKIc7gp1sMw35eobGybVVCx5F7P1es6Qt7XSqFcJDgimiz2ok=',
  'user_sign': 'gBdJpCyl7dZ4vfLPJ1dAxbZRq3YCblMBuxd29LSxV6jsg6bKe9BdTGW25nvrQ5loDIwdcn7PskZa887jCtD2TlXCZTjuXoJcozD7Dp7QU8FKKLjcV0H35ZE0egNZ1tmq7RV0YG7cx2oFdARlttFSiMDQpzA00BNjtsmOtfB8+TBkCMxn6VtH+6u5N0BKIc7gp1sMw35eobGybVVCx5F7P1es6Qt7XSqFcJDgimiz2ok=',
  'blacker_type': {
    'forbid_speak': 0,
    'forbid_visit': 0,
    'forbid_shout': 0
  },
  'guard_top_num': 0,
  'has_followed': 0,
  'sun_resumed_time': 180,
  'sun_max_num': 50,
  'chat_resumed_time': 1,
  'shout_resumed_time': 5,
  'today_is_sign': 0,
  'signin_date': '2017-08-31',
  'signin_max_num': 1,
  'noble_rank': 0,
  'noble_expiretime': '',
  'noble_rest_time_int': 0,
  'noble_rest_time_str': '',
  'if_receive_push': 1,
  'play_area': -1,
  'user_package': [],
  'is_anchor': 0,
  'kz_id': '',
  'left_rename_num': 1,
  'sns_id': 0,
  'sns_from': 0,
  'status': 1,
  'has_plat_signin': 0,
  'plat_signin_days': 0
}

const state = {
  user: userFake
}

const mutations = {
  [types.SET_USER] (state, user) {
    if (!state.user) state.user = user
  },
  [types.UNSET_USER] (state) {
    state.user = null
  }
}

const getters = {}

const actions = {
  login ({ commit, state }) {
    api.login((err, res) => {
      if (!err) commit(types.SET_USER, res.data.user)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
