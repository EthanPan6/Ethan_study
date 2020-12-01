async function test() {
    return 'Hello World!'
}
console.log(test());//Promise { 'Hello World!' }==>一个promise对象
// test.then(data => {console.log(data);})//报错==>怎么可以用then出来呢?
// console.log(await test());//报错==>await必须使用在async函数中

async function print(fn) {
    let result = await fn()
    console.log(result);
}
print(test)

//下面这个promise为什么可以不用then出来呢?
async function timer() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let name = '张三'
            res(name)
        }, 500)
    })
}

print(timer)