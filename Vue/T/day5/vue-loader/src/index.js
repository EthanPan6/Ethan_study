import Vue from 'vue'
import 'weui'
import './assets/styles.scss'
import App from './app.vue'
new Vue({
    el: '#app',
    render(h) {
        return h(App)
    }
})