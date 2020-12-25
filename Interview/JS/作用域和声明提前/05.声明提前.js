foo()//声明方式函数
function foo() {
    console.log('声明方式函数');
}
foo()//声明方式函数
var foo = function () {
    console.log('表达式函数');
}
foo()//表达式函数
var foo = function () {
    console.log('表达式函数2');
}
foo()//表达式函数2

var foo = new Function("console.log('构造函数声明');")
foo()
function foo() {
    console.log('声明方式函数');
}
foo()