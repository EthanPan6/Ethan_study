import Vue from 'vue'
// import VueRouter from '../assets/vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/Home'
import HelloWorld from '../components/HelloWorld'
const routes = [{
    path: '/home',
    name: 'home',
    component: Home
}, {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
}]
const router = new VueRouter({
    routes
})
export default router