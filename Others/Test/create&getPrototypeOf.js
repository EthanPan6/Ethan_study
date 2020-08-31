var a = {
    name: "father"
}

var b = Object.create(a, {
    // foo会成为所创建对象的数据属性
    foo: {
        writable: true,
        configurable: true,
        value: "hello"
    },
    // bar会成为所创建对象的访问器属性
    bar: {
        configurable: false,
        get: function () {
            return 10
        },
        set: function (value) {
            console.log("Setting `o.bar` to", value);
        }
    }
})

console.log(b) //{foo: "hello"}
console.log(Object.getPrototypeOf(b)) //{ name: "father"}
console.log(Object.getPrototypeOf(b) === a) //true