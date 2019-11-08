import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './stores/store'
import router from './router/index'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
// https://m.kongfz.com/operation/mobile/ajax/getIndexSquare?currPage=1