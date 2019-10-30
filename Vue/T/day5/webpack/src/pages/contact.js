import Vue from 'vue/dist/vue'
import Header from '../model/header.vue'
export default Vue.extend({
    template: `
        <div>
            <Header color="red">通讯录</Header>
        </div>
    `,
    methods: {},
    components: {
        Header
    }
})