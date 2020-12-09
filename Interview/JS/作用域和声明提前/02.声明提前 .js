// foo()//声明方式函数
// function foo() {
//     console.log('声明方式函数');
// }


foo()   //TypeError:foo is not a function
var foo = function () {
    console.log('表达式函数');
}
foo()
var foo = function () {
    console.log('表达式函数2');
}
foo()