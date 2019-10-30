import Vue from 'vue/dist/vue'
import template from '../view/header.html'
export default Vue.extend({
    // props: ['color'],
    props: {
        // 规范传入类型
        color: String
    },
    data() {
        return {
            title: '腾讯新闻'
        }
    },
    template,
    methods: {}
})