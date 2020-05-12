import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 解决tabble多次点击一个的报错问题
import Router from 'vue-router'
const originalPush = Router.prototype.push
    // eslint-disable-next-line space-before-function-paren
Router.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
    }
    // 引入vant的轮播组件

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

// 创建公共的bus实现非父子组件之间的通信
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')