import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../pages/Home'
import Study from '../pages/Study'
import Blink from '../pages/Blink'
import Bbs from '../pages/Bbs'
import Mine from '../pages/Mine'

Vue.use(VueRouter)


const routes = [
    {
        path: '/home',
        name: 'home',
        componnent: Home
    }, {
        path: '/study', name: 'study',
        componnent: Study
    }, {
        path: '/blink', name: 'blink',
        componnent: Blink
    }, {
        path: '/bbs', name: 'bbs',
        componnent: Bbs
    }, {
        path: '/mine', name: 'mine',
        componnent: Mine
    }
]


const router = new VueRouter({
    routes
})

export default router 