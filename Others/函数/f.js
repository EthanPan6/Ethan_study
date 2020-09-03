// var f = function () {
//     return [...arguments]
// }


function f() {
    console.log(arguments)
    return [...arguments]
}

console.log(f.apply(f, [1, 2, 3, ]));
console.log(f(5, 5, 5, ))