//Reflect.get(target,property,receiver)
//查找并返回target对象的property属性
//如果target属性部署了读取函数，则读取函数的this绑定到receiver。

// let obj = {
//     name: "chen",
// }
// let receiver = {}
// let result = Reflect.get(obj, "name", receiver)
// console.log(result, receiver) //chen {}

let obj = {
    //属性yu部署了getter读取函数
    get yu() {
        //this返回的是Reflect.get的receiver参数对象
        return this.name + this.age
    }
}

let receiver = {
    name: "shen",
    age: "18",
}

let result = Reflect.get(obj, "yu", receiver)
console.log(result) //shen18