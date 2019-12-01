import React, { Component } from 'react'

export default class dataMap extends Component {
    constructor() {
        super()
        this.state = {
            list: [1, 2, 3, 4, 5, 64, 8, 48, 45, 1, 1, 1, 51, 5]
        }
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.list}
                    {this.state.list.map(item => <li>{item}</li>)}
                    <div dangerouslySetInnerHTML={{ __html: this.state.list }} />

                    {/*
                    方式一:直接放一个数组,最好是带有html标签的jsx
                    方式二:数组的map方法,注意要加"key",且key尽量不要使用index(下标)
                    方式三: 渲染带有标签的字符串(非jsx)时需要使用<div dangerouslySetInnerHTML={{ __html: this.state.list }} />
                        可以防止xss攻击
                        有2个{{}}，第一{}代表jsx语法开始，第二个是代表dangerouslySetInnerHTML接收的是一个对象键值对;
                    */}
                </ul>
            </div>
        )
    }
}
//https://www.bilibili.com/video/av55814626?p=15