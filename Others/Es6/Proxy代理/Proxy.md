## Proxy代理

**元编程:**Proxy用于修改某些操作的默认行为，等同与在语言层面做出修改，即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

### 语法

```js
 let p = new Proxy(target, handler);
```

+ `target` ：需要使用`Proxy`包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
+ `handler`: 一个对象，其属性是当执行一个操作时定义代理的行为的函数(可以理解为某种触发器)。  

```js
let a = {
    name: "Jack"
}
let test = new Proxy(a, {
    get(obj, key) {
        console.log('获取了getter属性');
        return target[key]
    },
    set(obj, key, value) {
        this[key] = value;
        console.log('获取了setter属性');
    }
})
console.log(test.name = "ss");
```

在上例中,访问器的`obj`即被代理的`target` 

