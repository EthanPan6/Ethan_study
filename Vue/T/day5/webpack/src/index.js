import Vue from 'vue/dist/vue'
import 'weui'
import './assets/styles.scss'

import Tabbar from './model/tabbar'
import Wechat from './pages/wechat'
import Contact from './pages/contact'
new Vue({
    el: '#app',
    data: {
        componentName: 0
    },
    template: `
        <div>
            <keep-alive>
                <component :is="componentNameComputed"></component>
            </keep-alive>
            <Tabbar/>
        </div>
    `,
    components: {
        Tabbar,
        Wechat,
        Contact
    },
    computed: {
        componentNameComputed() {
            return this.componentName === 0 ? 'Wechat' : 'Contact'
        }
    }
})