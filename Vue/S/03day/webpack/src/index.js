import Vue from 'vue/dist/vue'
import 'weui'
import './assets/styles.scss'


//V
import headerV from './view/header.html'
import panelV from './view/panel.html'
import tabbarV from './view/tabbar.html'
import searchV from './view/search.html'



//M
import icon from './assets/icon_tabbar.png'
import headerM from './model/header.js'
import panelM from './model/panel.js'
import tabbarM from './model/tabbar.js'
import searchM from './model/search.js'

new Vue({
    // V
    el: "#app",
    // M
    data: {
        icon,
        headerM: headerM.data,
        searchM: searchM.data,
        panelM: panelM.data,
        tabbarM: tabbarM.data,
    },
    methods: {
        ...headerM.methods,
        ...searchM.methods,
        ...panelM.methods,
        ...tabbarM.methods

    },
    template: `
        <div>
        ${headerV}
        ${searchV}
        ${panelV}
        ${tabbarV}
        </div>
    `,
    // render会在data变化的时候重新触发一次
    // render(h) {
    //     // h(标签的名字，该标签的属性，标签里面的值)
    //     let view = h('div', null, this.model)
    //     console.log(view)
    //     return view
    // }
})