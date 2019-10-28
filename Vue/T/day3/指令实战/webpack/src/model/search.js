export default {
    data: {
        // 搜索框是否聚焦
        isFocusStatus: false,
        // 搜索框的值
        searchText: ''
    },
    methods: {
        focus() {
            console.log(this)
            this.searchModel.isFocusStatus = true
        },
        cancel() {
            this.searchModel.isFocusStatus = false
        },
        // 清空搜索框
        clear() {
            this.searchModel.searchText = ''
        }
    }
}