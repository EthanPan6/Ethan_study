import Vue from 'vue/dist/vue'
import 'weui'
import './assets/styles.scss'

//  View
import headerView from './view/header.html'
import searchView from './view/search.html'
import panelView from './view/panel.html'
import tabbarView from './view/tabbar.html'

// Model
import iconTabbar from './assets/icon_tabbar.png'
import headerModel from './model/header'
import searchModel from './model/search'
import panelModel from './model/panel'
import tabbarModel from './model/tabbar'

const vm = new Vue({
    el: '#app',
    data: {
        iconTabbar,
        headerModel: headerModel.data,
        searchModel: searchModel.data,
        panelModel: panelModel.data,
        tabbarModel: tabbarModel.data
    },
    methods: {
        ...headerModel.methods,
        ...searchModel.methods,
        ...panelModel.methods,
        ...tabbarModel.methods
    },
    computed: {
        // 被筛选过
        newsComputed() {
            this
            // 如果有搜索的值就计算结果
            // 否则使用原来数据
            let _ = this
            if (this.searchModel.searchText) {
                // 搜索的值
                // this.searchModel.searchText
                // 新闻原数据
                // this.panelModel.news
                return this.panelModel.news.filter(function (item) {
                    console.log(this)
                    if (item.title.indexOf(_.searchModel.searchText) >= 0) {
                        return item
                    }
                })
            } else {
                return _.panelModel.news
            }
        }
    },
    template: `
        <div>
            ${headerView}
            ${searchView}
            ${panelView}
            ${tabbarView}
        </div>
    `
})
// node
console.log(this) //window