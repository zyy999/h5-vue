import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import data from './data'

export default () => {
  const mock = new MockAdapter(axios)

  mock.onGet('/rooms').reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (Math.random() > 0.25) {
          resolve([200, {
            msg: 'success',
            rooms: data.rooms
          }])
        } else {
          resolve([500, { success: false }])
        }
      }, Math.random() * 1000)
    })
  })

  mock.onGet('/login').reply(200, {
    msg: 'success',
    user: data.user
  })
}
