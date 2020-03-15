import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

import createLogger from 'vuex/dist/logger' // 修改state时控制台会打印日志
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  plugins: debug ? [createLogger()] : []
})

export default store
