//promise
new Promise((resolve, reject) => {
    resolve()//成功
    reject()//失败
})

function fn() {
    return new Promise((resolve, reject) => {
        resolve()
        reject()
    })
}

//  eg:
console.log(1)
setTimeout(() => {
    console.log(2)
    setTimeout(() => {
        console.log(3)
        setTimeout(() => {
            console.log(4)
        }, 1000)
    }, 1000)
}, 1000)

console.log(5)

//转化为
function f1() {
    console.log(1)
}
function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2)
            resolve()
        }, 1000)
    })
}
function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3)
            resolve()
        }, 1000)
    })
}
function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(4)
            resolve()
        }, 1000)
    })
}

function f5() {
    console.log(5)
}
f1()
f2().then(f3).then(f4)
f5()

//改进:

console.log(1)
setTimeout(() => {
    console.log(2)
    setTimeout(() => {
        console.log(3)
        setTimeout(() => {
            console.log(4)
        }, 1000)
    }, 1000)
}, 1000)

console.log(5)

//转化为
function f1() {
    console.log(1)
}
function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2)
            resolve()
        }, 1000)
    })
}
function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3)
            resolve()
        }, 1000)
    })
}
function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(4)
            resolve()
        }, 1000)
    })
}

function f5() {
    console.log(5)
}
f1()
f2().then(f3).then(f4)
f5()