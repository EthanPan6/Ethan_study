import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import store from './stores'
import router from './router'

// Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,

  // store,
  render: h => h(App),
}).$mount('#app')






