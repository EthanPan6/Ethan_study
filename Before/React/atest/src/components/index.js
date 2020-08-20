//用于收集和导出所有的组件,方便后面引入(后面只需要引入这个文件)

//方式一
// import Home from './Home'
// import Footer from './Footer'
// export default {
//     Home, Footer
// }

//方式二
export { default as Home } from './Home'
export { default as Footer } from './Footer'
export { default as Main } from './Main'
