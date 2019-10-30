import Vue from 'vue/dist/vue'
import Header from '../model/header.vue'
import Search from '../model/search'
import Panel from '../model/panel'
export default Vue.extend({
    template: `
        <div>
            <Header color="green">微信</Header>
            <Search/>
            <Panel/>
        </div>
    `,
    methods: {},
    components:{
        Header,
        Search,
        Panel
    }
})