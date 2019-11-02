import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home'
import Study from '../pages/Study'
import Blink from '../pages/Blink'
import Bbs from '../pages/Bbs'
import Mine from '../pages/Mine'

import Recommend from '../components/Recommend'
import Trends from '../components/Trends'
import Safety from '../components/Safety'
import Fontback from '../components/Fontback'
import Architecture from '../components/Architecture'
import Sql from '../components/Sql'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'recommend',
                name: 'recommend',
                component: Recommend
            },
            {
                path: 'trends',
                name: 'trends',
                component: Trends
            },
            {
                path: 'safety',
                name: 'safety',
                component: Safety
            }, {
                path: 'fontback',
                name: 'fontback',
                component: Fontback
            }, {
                path: 'architecture',
                name: 'architecture',
                component: Architecture
            }, {
                path: 'sql',
                name: 'sql',
                component: Sql
            }
        ]
    },
     {
        path: '/blink',
        name: 'blink',
        component: Blink
    }, 
    {
        path: '/bbs',
        name: 'bbs',
        component: Bbs
    }, 
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    }, 
    {
        path: '/study',
        name: 'study',
        component: Study
    }
]


const router = new VueRouter({
    routes,
    // hash
    // mode: 'history'
})

export default router 