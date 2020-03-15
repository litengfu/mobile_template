import axios from 'axios'
import store from '../store'
import router from '../router'
// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers['token'] = JSON.parse(localStorage.getItem('userInfo') || JSON.stringify({token: ''})).token // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      if (res.code != 103 && res.code != 199) {
        console.log(res.msg || '错误');
      }
      // 103:Token 过期了;199:token不一致
      if (res.code == 103 || res.code == 199) {
        window.localStorage.removeItem('userInfo')
        router.push({
          path: '/login'
        })
      }
      return Promise.reject(res.msg)
    } else {
      return response.data
    }
  }
)

export default service
