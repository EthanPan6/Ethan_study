let a = {
    name: "Jack"
}
let test = new Proxy(a, {
    get(target, key) {
        console.log('获取了getter属性');
        return target[key]
    }
})
console.log(test.name);