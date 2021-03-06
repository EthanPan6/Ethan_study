import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {//数据
        count: 0,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
    },
    mutations: {//修改数据的唯一方法,需要通过this.$store.commit('setCount',option)唤醒
        changeLogin(state, user) {
            //state->state
            //user->new
            state.token = user.token;//store存
            localStorage.setItem('token', user.token);//localStorage存
        }
    },
    actions: {//类似mutations
        setCount(context, newValue) {
            context.commit('setCount', newValue)

        }
    },
    getters: {
        // getToken(state) {
        //     return state.token
        // },

    }
})
export default store

//在调用的组件中使用:
/*
//mutations
methods:{
    fn(){
        //option为组件里的data的数据
        // this.value
        //通过 v-model触发
        this.$store.commit('setCount',option)
    }
}
//actions
methods:{
    fn(){
        this.$store.dispatch('setCount',option)
    }
}
//getters
computed:{
    fn(){
        return this.$store.getters.getCount
    }
}





*/
