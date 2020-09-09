let a = {
    name: "Jack"
}
let test = new Proxy(a, {
    get(target, key) {
        console.log('获取了getter属性');
        return target[key]
    },
    set(target, key, value) {
        target[key] = value;
        console.log('获取了setter属性');
    }
})

console.log(test.name);
test.age = 18
console.log(a.age);

test.eat = () => {
    console.log("eat");
}
a.eat()
a.job = "tester"