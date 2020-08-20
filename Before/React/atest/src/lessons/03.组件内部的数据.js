//函数式组件又叫无状态组件,没有自己的state

import React, { Component } from 'react'

class classState extends Component {
    // state = {//初始写法
    //     name: 'jack',
    //     age: '12'
    // }

    constructor() {//推荐写法
        super()
        this.state = {
            name: 'jack',
            age: '12'
        }
    }


    render() {
        return (
            <div>
                {this.state.name}<br />
                {this.state.age}
            </div>
        )
    }
}
/*
    组件的分类:
        创建方式:类组件+函数式组件
        状态分类:
            类组件:有(自身)状态组件
            函数组件:无状态组件
        是否受控:
            (完全)受控组件:所有数据都是通过props
            非受控组件:所有数据都是自己的数据
            半受控组件



*/