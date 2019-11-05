import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//最外层
import Main from '../components/Main'
import Article from '../components/Article'
import Search from '../components/Search'
import Edit from '../components/Edit'
import Login from '../components/Login'

//二层
import Home from '../components/home/Home'
import Study from '../components/study/Study'
import Bbs from '../components/bbs/Bbs'
import Mine from '../components/mine/Mine'

//三层
import Recommend from '../components/home/pages/Recommend'
import Trends from '../components/home/pages/Trends'
import Safety from '../components/home/pages/Safety'
import Frontend from '../components/home/pages/Frontend'
import Architecture from '../components/home/pages/Architecture'
import Sql from '../components/home/pages/Sql'


import Jishu from '../components/bbs/pages/Jishuqu'
import Shenghuo from '../components/bbs/pages/Shenghuoqu'


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
    },
    {
        path: '/edit',
        name: 'edit',
        component: Edit
    }
    ,
    {
        path: '/login',
        name: 'login',
        component: Login
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