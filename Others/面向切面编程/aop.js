//原代码
// function test1() {
//     console.log('-------------------');
//     console.log(1);
//     console.log('+++++++++++++++++++');
// }
// function test2() {
//     console.log('-------------------');
//     console.log(2);
//     console.log('+++++++++++++++++++');
// } function test3() {
//     console.log('-------------------');
//     console.log(3);
//     console.log('+++++++++++++++++++');
// }
// test1()
// test2()
// test3()

//AOP编程
function test() {
    // console.log('-------------------');//before
    console.log(1);
    // console.log('+++++++++++++++++++');//after
}

Function.prototype.before = function (cb) {
    var _this = this
    return function () {
        cb.apply(_this, arguments);
        _this.apply(_this, arguments)
    }
}
Function.prototype.after = function (cb) {
    var _this = this
    return function () {
        _this.apply(_this, arguments)
        cb.apply(_this, arguments);
    }
}
test.before(() => {
    console.log('-------------------');
}).after(() => {
    console.log('+++++++++++++++++++');
})()