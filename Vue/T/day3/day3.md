# 计算属性和侦听器

```html
<div id="example">
  {{ message }}
  {{ message.split('').reverse().join('') }}
</div>
```
你本身想渲染的是message，但是某种原因你想去加工这个数据，这个数据经过计算之后，从一个状态变为另外一个状态，那你就考虑使用计算属性
```js
message.split('').reverse().join('')
```
你可以运用computed属性封装一个公式，代替上面冗余的写法，把它一个计算属性里面封装
```html
<div id="demo">
    <p v-text="name+'ing'"></p>
    <p>{{name+'ing'}}</p>
    <p>{{nameComputed}}</p>
</div>
<script src="vue.js"></script>
<script>
    new Vue({
        el: "#demo",
        data: {
            name: 'see'
        },
        computed: {
            // nameComputed计算结果： 计算公式()=>{}
            nameComputed: function () {
                return this.name + 'ing'
            }
        }
    })
</script>
```
watch，侦听器，监听数据的改变，触发对应的逻辑，如果你的数据频繁变化，你可以尝试用watch来去监听
```html
<div id="demo">
    <input v-model="name" />
    <p>{{name}}</p>
</div>
<script src="vue.js"></script>
<script>
    new Vue({
        el: "#demo",
        data: {
            name: 'see'
        },
        watch: {
            // 侦听name属性
            // name属性只要发生变化，下面这个函数就会触发
            name: function () {
                console.log('触发侦听器了')
            }
        }
    })
</script>
```

watch和computed，computed有缓存(缓存是结果和原数据)，但是watch没缓存，在一直监听原数据

# 前端模糊搜索

本身有15条数据，经过搜索的值，变为1条数据

```js
# 15条数据 + 搜索的值 = 结果
news15 + searchText = news1
```