import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//最外层
import Main from '../components/Main'
import Search from '../components/search/Search'
import Login from '../components/Login'
import Test from '../components/Test'
import NotFoundComponent from '../components/NotFoundComponent'

//二层
import Home from '../components/home/Home'
import Shop from '../components/shop/Shop'
import Auction from '../components/auction/Auction'
import Cart from '../components/cart/Cart'
import Mine from '../components/mine/Mine'

import Result from '../components/search/pages/Result'



const routes = [
    {
        path: '/main',
        name: 'main',
        component: Main,
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'shop',
                name: 'shop',
                component: Shop,
            },
            {
                path: 'mine',
                name: 'mine',
                component: Mine
            },
            {
                path: 'auction',
                name: 'auction',
                component: Auction
            },
            {
                path: 'cart',
                name: 'cart',
                component: Cart
            }
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        children: [
            {
                path: 'result',
                name: 'result',
                component: Result
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
    ,
    {
        path: '/test',
        name: 'test',
        component: Test
    },
    { path: '*', component: NotFoundComponent }


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