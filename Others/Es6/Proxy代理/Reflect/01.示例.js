let target = {}
let receiver = {
    tag: "receiver"
}
let handler = {
    set(target, proName, proValue, receiver) {
        //确认对象的属性赋值成功
        let isSuccess = Reflect.set(target, proName, proValue, receiver)
        if (isSuccess) {
            console.log("成功")
        }
        return isSuccess
    }
}
let proxy = new Proxy(target, handler);
proxy.name = "proxy";
console.log(proxy, target, receiver);
// { name: 'proxy' } { name: 'proxy' } { tag: 'receiver' }
//receiver??有没有被操作呢?