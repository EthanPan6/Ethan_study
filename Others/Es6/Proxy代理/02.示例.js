const handler = {
    set(target, key, value) {
        target[key] = value;
        console.log('获取了setter属性');
        console.log(this);
    },
    get(target, key) {
        return key in target ? target[key] : "未定义"
    }
}
const p = new Proxy({}, handler);
console.log(p.a);

p.a = 18
console.log(p.a);