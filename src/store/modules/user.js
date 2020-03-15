import { login, getUserData } from '@/api/login'


const user = {
  state: {
    token: JSON.parse(localStorage.getItem('userInfo') || JSON.stringify({token: ''})).token,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || '请登录'
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          commit('SET_TOKEN', res.data.token)
          commit('SET_USER_INFO', res.data)
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    getUserData ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserData(state.token).then(res => {
          commit('SET_USER_INFO', res)
          localStorage.setItem('userInfo', JSON.stringify(res))
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
