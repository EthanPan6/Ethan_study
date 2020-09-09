let validator = {
    set(obj, key, value) {
        if (key == "age") {
            if (!Number.isInteger(value)) {
                throw new TypeError("请输入一个整数");
            }
            if (value > 200) {
                throw new RangeError("这个数有点大")
            }
        }
        obj[key] = value;
        return !0;
    }
}

let person = new Proxy({}, validator);
person.age = 20;

console.log(person.age);