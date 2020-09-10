let obj = {
    name: "chen"
}

let handler = {
    set(target, key, value, receiver) {
        console.log("Proxy拦截赋值操作")
        //Reflect完成赋值操作
        console.log(...arguments);
        Reflect.set(target, key, value, receiver)
    },
    defineProperty(target, key, attribute) {
        console.log("Proxy拦截定义属性操作")
        //Reflect完成定义属性操作
        console.log(...arguments);
        Reflect.defineProperty(target, key, attribute)
    }
}

let proxy = new Proxy(obj, handler)
proxy.name = "ya"
//Proxy拦截赋值操作
//Proxy拦截定义属性操作