# Vue

尤大大 Google设计师

- jquery pc霸主
- angular node 08-15 pc一大霸主 Google andriod

移动端的东风

- react 15 Facebook
- vue 15 @Vue

vue最轻的一个框架，源码最少的框架

vue2.0 vue3.xxAplah 预览版本

vue view 注重视图层，Vue 的核心库只关注视图层

# 安装

适合学习
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="./vue.js"></script>
    <script>
        // 如果拟引入成功，会有一个全局的Vue的构造函数
        console.log(Vue)
    </script>
</body>
</html>
```
构造大型项目，配合Node的webpack和npm
```bash
# 最新稳定版
$ npm install vue
```
`vue-cli`可以一键安装整个开发环境

这里实例化这个函数，会得到一个实例对象，再实例化的时候里面可以放入多个选项
```js
const vm = new window.Vue({
    // 选项
    // https://cn.vuejs.org/v2/api/
    
    // 以后可以放入很多参数
})
```
vm就是实例化之后的对象，view->model

Vue使用`{{}}`声明式渲染
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <!-- View -->
    <div id="app">
        <!-- view的作用域 -->
        <p>{{name}}</p>
    </div>
    <p>{{name}}</p>
    <script src="./vue.js"></script>
    <script>
        const vm = new window.Vue({
            // V
            el: "#app",
            // M
            data: {
                name: 'yao'
            }
        })
    </script>
    <!-- 数据 视图分开管理 数据驱动视图 -->
</body>
</html>
```

由于vue在开发的时候，默认引入是，只有运行时，没有编译器
```js
vue.runtime.common.dev.js
```
vue.js完整版：同时包含编译器和运行时的版本。

里面有`template`和`render`的选项
```js
new Vue({
    el,
    data,
    template:`
        <p>{{name}}</p>
    `,
    render
})
```
render和template，因为render不需要编译器的，所以是运行的版本，template是需要编译器，所以完整版本
```js
// 需要编译器 字符串
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 不需要编译器 字符串模板变成函数
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```
我们一般写的是html结构，但是在大型框架里面，字符串的模板一般不好处理的
```html
<template>
    <p name="yao">hello world
        <span style="color:red">123</span>
        <span>123</span>
    </p>
</template>

<template>
    <p name="yao">hello world
        <span style="color:red">1234</span>
        <span>123</span>
    </p>
</template>
```
你写还是写html模板，但是它会自动转为一个函数
```js
h(
    "p",
    {
    name: "yao"
    },
    "hello world",
    h(
    "span",
    {
        style: "color:red"
    },
    name
    ),
    h("span", null, model)
    );
}
```
生成一个对象，把html模板转为对象
```js
let view1 = {
    tag: 'p',
    text: undefined
    children:[{
        tag: undefined,
        text: 'yao'
    }]
}

let view2 = {
    tag: 'p',
    text: undefined
    children:[{
        tag: undefined,
        text: 'yao1'
    }]
}
```
数据层没变动一次，其实会重新触发render，生成多分JS对象
```js
import Vue from 'vue'
new Vue({
    // V
    el: "#app",
    // M
    data: {
        model: "yao"
    },
    // render会在data变化的时候重新触发一次
    render(h) {
        // h(标签的名字，该标签的属性，标签里面的值)
        let view = h('div', null, this.model)
        console.log(view)
        return view
    }
})
```
不同镜像(js对象)做比较，找出差异的地方，实现局部更新

把html的字符串转render交给编译器去处理

编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码。

html->js函数->js对象

编译器交给webpack(node)去弄，可以节省Vue代码量，让vue的代码更轻便，


index.sass

如果我们想把编译器也引入，也就是template交给浏览器转render，那我们可以引入完整版本
```js
import Vue from 'vue/dist/vue'
```