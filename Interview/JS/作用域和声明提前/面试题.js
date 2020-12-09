console.log(a)//Function
a();//10
var a = 3;
function a() {
    console.log(10);
}
console.log(a);//3
a = 6;
a();//  TypeError: a is not a function

/*等价于
function a() {
    console.log(10);
}
console.log(a)//Function
a();//10
var a = 3;
console.log(a);//3
a = 6;
a();//  TypeError: a is not a function
*/