import Mock from 'mockjs'

const mock = Mock.mock

export default {
  rooms: Array.apply(null, Array(8)).map(item => {
    return {
      id: mock('@increment'),
      username: mock('@cname'),
      audience: mock('@natural(3,3000)'),
      tag: '嗨聊中',
      pic: mock('@dataImage(800x800)')
    }
  }),
  user: mock({
    id: mock('@id'),
    name: mock('@cname')
  }),
  index: mock({
    code: 0,
    msg: '操作成功',
    extra: null,
    result: {
      index_column: [

        {
          'id': 102,
          'name': '热门',
          'page_icon': '',
          'color': '',
          'color_h5': '',
          'bg_color': ''
        },
        {
          'id': 301003,
          'name': '嗨聊',
          'page_icon': '',
          'color': '',
          'color_h5': '',
          'bg_color': ''
        },
        {
          'id': 301001,
          'name': '唱歌',
          'page_icon': '',
          'color': '',
          'color_h5': '',
          'bg_color': ''
        },
        {
          'id': 301002,
          'name': '热舞',
          'page_icon': '',
          'color': '',
          'color_h5': '',
          'bg_color': ''
        },
        {
          'id': 103,
          'name': '游戏',
          'page_icon': '',
          'color': '',
          'color_h5': '',
          'bg_color': ''
        }
      ],
      game_column: [
        {
          'id': 103001,
          'name': '战舰世界',
          'page_icon': '/images/icon/game/column/battleshipworld@3x.png',
          'color': 'play-yellow',
          'color_h5': 'label-zjsj',
          'bg_color': '#ed6d00'
        },
        {
          'id': 103002,
          'name': '坦克世界',
          'page_icon': '/images/icon/game/column/tankworld@3x.png',
          'color': 'play-blue',
          'color_h5': 'label-tksj',
          'bg_color': '#5fa7f1'
        },
        {
          'id': 103005,
          'name': '装甲战争',
          'page_icon': '/images/icon/game/column/panzerwar@3x.png',
          'color': 'play-green',
          'color_h5': 'label-jz2',
          'bg_color': '#006633'
        },
        {
          'id': 103007,
          'name': '战舰猎手',
          'page_icon': '/images/icon/game/column/shiphunter@3x.png',
          'color': 'play-yellow',
          'color_h5': 'label-jz2',
          'bg_color': '#ed6d00'
        },
        {
          'id': 103003,
          'name': '王者荣耀',
          'page_icon': '/images/icon/game/column/kingofglory@3x.png',
          'color': 'play-red',
          'color_h5': 'label-zjfb',
          'bg_color': '#e8230c'
        },
        {
          'id': 103004,
          'name': '激战2',
          'page_icon': '/images/icon/game/column/fighting2@3x.png',
          'color': 'play-yellow',
          'color_h5': 'label-jz2',
          'bg_color': '#ed6d00'
        },
        {
          'id': 103008,
          'name': '炉石传说',
          'page_icon': '/images/icon/game/column/hearthstone@3x.png',
          'color': 'play-yellow',
          'color_h5': 'label-jz2',
          'bg_color': '#5fa7f1'
        },
        {
          'id': 103009,
          'name': '其他',
          'page_icon': '/images/icon/game/column/others@3x.png',
          'color': 'play-yellow',
          'color_h5': 'label-jz2',
          'bg_color': '#5fa7f1'
        }
      ],
      column_related_list: Array.apply(null, Array(8)).map(item => {
        return {
          'id': '123735',
          'room_type': 1,
          'room_style': 2,
          'room_style_extend': 0,
          'max_img_path': '/images/zb/48/f9/20160922184356777.jpg',
          'min_img_path': '/images/zb/ca/21/20170327104304534.jpeg',
          'room_status': 2,
          'introduce': 'aaaaaaaaaaaaaa',
          'notice': 'aaaaaaaaaaaaaaaaaaaaaa',
          'play_url': {
            'flv_play_url_raw': 'http://pili-live-hdl.dwtv.tv/dawang-test/123735.flv?s=e60bbac5fee749083a4fdcfc460c3bbe&ts=5a17ce02',
            'flv_play_url_high': 'rtmp://pili-live-rtmp.dwtv.tv/dawang-test/123735?s=e60bbac5fee749083a4fdcfc460c3bbe&ts=5a17ce02',
            'flv_play_url_low': 'rtmp://pili-live-rtmp.dwtv.tv/dawang-test/123735?s=e60bbac5fee749083a4fdcfc460c3bbe&ts=5a17ce02',
            'hls_play_url_raw': 'http://pili-live-hls.dwtv.tv/dawang-test/123735.m3u8?s=e60bbac5fee749083a4fdcfc460c3bbe&ts=5a17ce02'
          },
          'anchor_obj': {
            'id': '20091158',
            'nickname': '时光为幼稚买了单',
            'introduction': '',
            'small_head_url': '/images/heads/47/a0/20161111182527459.jpg',
            'user_rank': 29,
            'user_experience': 56939530,
            'user_experience_all': 406939530,
            'current_rank_user_need_total_experience': 60000000,
            'anchor_rank': 49,
            'anchor_experience': 1599999999,
            'anchor_experience_all': 72291141074,
            'current_rank_anchor_need_total_experience': 1,
            'is_anchor': 1,
            'follow_num': 12,
            'sun_resumed_time': 60,
            'sun_max_num': 130,
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
            'user_type': 1,
            'guard_top_num': 59,
            'blacker_type': null,
            'has_followed': 0,
            'today_is_sign': 0,
            'noble_rank': 7,
            'noble_expiretime': '2019-01-12 11:00:33',
            'noble_rest_time_int': 414,
            'noble_rest_time_str': '414天',
            'play_area': -1,
            'play_area_name': '其他',
            'anchor_weight': 1,
            'channel_id': 10000001,
            'sns_id': 0,
            'sns_from': 0,
            'status': 1,
            'left_rename_num': 1,
            'has_plat_signin': 1,
            'plat_signin_days': 0
          }
        }
      })
    }
  })
}
