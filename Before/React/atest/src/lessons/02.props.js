// 组件间的传值方式props(个人理解)
//props的数据流永远向下,需要state的方法实现数据的双向绑定
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

//类组件的props
class Son1 extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

//函数式组件的props
function Son2(props) {
    return (
        <div>
            {props.title}
        </div>
    )
}

class Son3 extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                {/* 便签间的内容就是 this.props.children */}
            </div>
        )
    }
}

class Father extends Component {
    render() {
        return (
            <>
                <Son1 name="HOME" />
                <Son2 title="Main" />
                <Son3>Children</Son3>
            </>
        )
    }
}

ReactDOM.render(<Father />, document.getElementById('root'));