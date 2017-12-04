import axios from 'axios'

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Requested-With': 'XMLHttpRequest'
}

const baseURL = 'http://n.h5.dwtv.tv/ajax/weixin'

export function getRooms (cb) {
  axios.get('/rooms')
  .then(res => {
    cb(null, res)
  })
  .catch(err => {
    cb(err)
    console.log(err)
  })
}

export function login (cb) {
  axios.get('/login')
  .then(res => {
    cb(null, res)
  })
  .catch(err => {
    cb(err)
    console.log(err)
  })
}

export function index (cb) {
  axios.get('/index', {
    baseURL,
    headers
  })
  .then(res => {
    cb(null, res)
  })
  .catch(err => {
    cb(err)
    console.log(err)
  })
}

export function getConfig (cb) {
  axios.get('/apiconfig', {
    baseURL
  })
  .then(res => {
    cb(null, res)
  })
  .catch(err => {
    cb(err)
    console.log(err)
  })
}
