import Vue from 'vue/dist/vue'
import './assets/eve.css'
import './assets/nav.css'
// import './assets/iconfont.css'

import './assets/index.css'
// 页面
import header from './template/header.html'
import grid from './template/grid.html'
import panel from './template/panel.html'
new Vue({
    // V
    el: "#app",
    // M
    data: {
        city: "广州"
    },
    template:`
        <div>
            ${header}
            ${grid}
            ${panel}
        </div>
    `,
})