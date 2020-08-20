import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 99
        }
    }
    add() {
        //setstate方法一
        this.setState({
            count: this.state.count + 1
        }, () => {
            //由于setState是异步的,所以最最最最新的状态在这个回调函数里
            console.log(this.state)
        })
    }
    pdd() {
        //setstate方法二:
        //不需要考虑this的指向
        //preState是之前的状态
        this.setState(preState => {
            return { count: preState.count - 1 }
        })
    }
    //无法直接修改state,必须通过事件+setstate方法去修改state
    //render中的事件绑定方式需要通过bind修改this指向和传值


    render() {
        return (
            <div className="main">
                <p>{this.state.count}</p>
                <button onClick={this.add.bind(this)}>加一个</button>
                <button onClick={this.pdd.bind(this)}>减一个</button>
            </div>
        )
    }
}
