export default {
    data: {
        isFocuse: false,
        keyword: ''
    },
    methods: {
        focus() {

            this.searchM.isFocuse = true;
        },
        cancel() {
            this.searchM.isFocuse = false
        },
        clear() {
            this.searchM.keyword = ''
        }
    }

}