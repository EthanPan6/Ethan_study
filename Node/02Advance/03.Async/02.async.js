async function test() {
    return 'Hello World!'
}
console.log(test());
//Promise { 'Hello World!' }==>一个promise对象==>//async方法默认返回一个promise

// test().then(data => {console.log(data);})//可以使用then直接调用
// console.log(await test());//报错==>await必须使用在async函数中

async function print(fn) {
    let result = await fn()
    console.log(result);
}
print(test)


async function timer() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let name = '张三'
            res(name)
        }, 500)
    })
}


console.log(print(timer).then(data => {
    console.log(data);
}));