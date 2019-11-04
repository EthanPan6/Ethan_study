import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//最外层
import Main from '../pages/Main'
import Article from '../components/Article'
import Search from '../pages/Search'

//二层
import Home from '../pages/Home'
import Study from '../pages/Study'
import Bbs from '../pages/Bbs'
import Mine from '../pages/Mine'

//三层
import Recommend from '../components/Recommend'
import Trends from '../components/Trends'
import Safety from '../components/Safety'
import Frontend from '../components/Frontend'
import Architecture from '../components/Architecture'
import Sql from '../components/Sql'


import Jishu from '../components/Jishuqu'
import Shenghuo from '../components/Shenghuoqu'


const routes = [
    {
        path: '/main',
        name: 'main',
        component: Main,
        children: [
            {
                path: 'home',
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
                        path: 'frontend',
                        name: 'frontend',
                        component: Frontend
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
                path: 'bbs',
                name: 'bbs',
                component: Bbs,
                children: [
                    {
                        path: 'jishu',
                        name: 'jishu',
                        component: Jishu,
                    },
                    {
                        path: 'shenghuo',
                        name: 'shenghuo',
                        component: Shenghuo,
                    }

                ]
            },
            {
                path: 'mine',
                name: 'mine',
                component: Mine
            },
            {
                path: 'study',
                name: 'study',
                component: Study
            }
        ]
    },
    {
        path: '/article',///:id
        name: 'article',
        component: Article
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }

]


const router = new VueRouter({
    routes,
    // hash
    // mode: 'history'
})

export default router
/*
  {

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
                path: 'frontend',
                name: 'frontend',
                component: Frontend
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

    */