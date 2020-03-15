
import request from '@/utils/request'

// 用户名登录
export function login ({ username, password }) {
  return request.post('/Login/loginHandle.html', { username, password }).then(function (res) {
    return Promise.resolve(res.data)
  })
}


// 获取用户名
export function getUserData () {
  return request.post('/Team/getUserData').then(function (res) {
    return Promise.resolve(res.data)
  })
}
