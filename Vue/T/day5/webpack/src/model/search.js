import Vue from 'vue/dist/vue'
import template from '../view/search.html'
export default Vue.extend({
    data() {
        return {
            // 搜索框是否聚焦
            isFocusStatus: false,
            // 搜索框的值
            searchText: ''
        }
    },
    template,
    methods: {
        focus() {
            console.log(this)
            this.isFocusStatus = true
        },
        cancel() {
            this.isFocusStatus = false
        },
        // 清空搜索框
        clear() {
            this.searchText = ''
        }
    }
})