import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.scss';
import './utils/rem'
import FastClick from 'fastclick' //解决移动端300s延迟
FastClick.attach(document.body);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
