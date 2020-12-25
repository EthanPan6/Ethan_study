// 如何生成一个自己想要的为数组呢?
// function createArrayLike() {
//     return arguments
// }
// console.log(createArrayLike(1, 2, 3, 4, 5));

//伪数组变数组的方法

//1.
var args = Array.prototype.slice.call(arguments);

// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
}
//3. 
Array.from(arrayLike)

//4.
arr = [...arrayLike]