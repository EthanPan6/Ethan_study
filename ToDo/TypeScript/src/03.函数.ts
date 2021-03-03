
//无参数
//声明式
function run(): string {
    return 'running...'
}

//表达式(匿名函数)
let fn1 = function (): number {
    return 1
}

//有参数
//指定参数
function sayHi(name: string, age: number): string {
    return `${name}say:Hi!I'm${age}`
}
let getInfo = function (name: string, age: number): string {
    return `${name}-----------${age}`
}
//可选参数
function getMore(name: string, age?: number): string {
    let result = age ? age : (age ?? '默认值')
    return `${result}`
}
//剩余参数
function sum(...rest: number[]): number {
    let res: number = 0
    for (let i = 0; i < rest.length; i++) {
        res += rest[i]
    }
    return res
}

function sum1(a: number, b: number, ...rest: number[]): number {
    let res: number = a + b
    for (let i = 0; i < rest.length; i++) {
        res += rest[i]
    }
    return res
}

//函数重载
//两个或以上的同名函数,传参不同实现多种功能

