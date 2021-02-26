import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'

// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios

// 安装VueTouch插件
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 //手指滑动的距离
}

//全局过滤器
// Vue.filter('imgsrc', function(value) {
//   return value
// })

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
