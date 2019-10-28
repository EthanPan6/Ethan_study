# 生命周期

构造函数
构造函数在实例化，会经历每一个周期，你可以把对应的逻辑放在对应的周期
把逻辑以一种面向对象的形式写在选项里面

生命周期是一种特殊的选项

```js
var vm = new Vue({
    // 选项
    el: '#demo',
    data: {
        name: 'yao'
    },
    created() {
        setTimeout(() => {
            vm.name = 'jing'
        }, 2000)
    },
    // this === vm
})
// setTimeout(() => {
//     vm.name = 'jing'
// }, 2000)
// console.log(vm)
```

创建前，Vue会初始化事件和生命周期，所以你可以使用methods和beforeCreated

一般不建议直接操作真实DOM
```
document.querySelector('xxx').style.color = "red"
```

要去修改视图，用vue的方法，指令 v->m m->v

创建前后，和挂载前后都只会在Vue实例化的时候执行一次

虚拟DOM，一棵树

动态组件

- activated
- deactivated
- beforeDestroy
- destroyed

# 组件

允许我们使用小型、独立和通常可复用的组件构建大型应用

- 小型 体积越小，性能越高
- 独立
- 可复用

组件几个特性，组件越小，镜像对比就越性能越高

一个项目通常只有一个根容器
```js
# 跟容器
new Vue()
```

注册组件的常用方法
```js
Vue.component()
```

```js
Vue.extend()
```

`new Vue`里面能用的选项，在组件同样适用
```js
const Header = Vue.extend({
    // el不能使用
    el:``,
    // 独一无二
    data(){
        return {}
    },
    // 选项
    template:`<div>组件1</div>`,
    computed,
    watch:{},
    created(){},
    methods:{},
    data(){}
})
```

通过 Prop 向子组件传递数据

组件的本质是自定义标签