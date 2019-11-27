import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// //原理
// const creatElement = (props) => {
//     return <h3>{props.content}</h3>
// }
// let app = creatElement({ content: 'hello world!' })
// ReactDOM.render(app, document.getElementById('root'));


// // 写法1:函数式组件
// //组件名首字母大写
// const App = (props) => {
//     return <h3>{props.content}</h3>
// }
// ReactDOM.render(<App content="hello world!" />, document.getElementById('root'));
// //在<>中除了组件名,其他的都是属于props


//写法2:类组件
class App extends React.Component {
    render() {
        return (<h3>{this.props.content}</h3>)
    }
}
ReactDOM.render(<App content="hello world!"></App>, document.getElementById('root'));


