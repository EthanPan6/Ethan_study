//es6
function fibonacci(cc) {
    let r = 1
    let r2 = 1
    let fb = [1, 1]
    for (let i = 2; i < cc; i++) {
        [r, r2] = [r2, r + r2]
        fb.push(r2)
    }
    return fb
}
console.log(fibonacci(5));

//递归
function finb2(i) {
    return i > 2 ? finb2(i - 1) + finb2(i - 2) : 1
}
console.log(finb2(5));

//数组
function fib3(i) {
    let fibs = [1, 1];
    while (i > fibs.length) {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
    }
    return fibs
}
console.log(fib3(5));
