import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './stores/store'
import router from './router/index'
// import QS from 'qs'
// Vue.prototype.qs = QS;
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  // QS,
  render: h => h(App),
}).$mount('#app')






