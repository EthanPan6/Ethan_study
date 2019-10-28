export default {
    data: {
        tabbar: [{
            title: '微信',
            url: 'wechat',
            badge: 8,
            dot: false
        }, {
            title: '通讯录',
            url: 'contact',
            badge: 0,
            dot: false
        }, {
            title: '发现',
            url: 'recover',
            badge: 0,
            dot: true
        }, {
            title: '我',
            url: 'mine',
            badge: 0,
            dot: false
        }],
        offset: 0
    },
    methods: {
        toggle(index){
            this.tabbarModel.offset = index
        }
    }
}