import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 解决tabble多次点击一个的报错问题
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
