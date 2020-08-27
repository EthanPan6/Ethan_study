/*
parseInt() 函数可解析一个字符串，并返回一个整数

parseInt(string, radix)
string	必需。要被解析的字符串。

radix	可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。

*/
parseInt(2, 1)
console.log(parseInt(2, 1)); //NaN
console.log(parseInt(2, 2)); //NaN
console.log(parseInt(2, 3)); //2
console.log(parseInt(3, 2)); //NaN

//当string>radix返回值为NaN


let ans = ["1", "2", "3"].map(parseInt);
console.log(ans); //[1,NaN,NaN]


let ans2 = "1 2 3".replace(/\d/g, parseInt);
console.log(ans2); // 1 NaN 3

/*
当 replace 的第二个参数是函数的时候，
该函数的第一个参数是匹配模式的字符串，
接下来的参数是与模式中的子表达式匹配的字符串，
可以有 0 个或者多个这样的参数。
接下来的参数是一个整数，
声明了匹配在 StringObject 中出现的位置，
最后一个参数是 StringObject 本身。

let fn = (...a) => {
  console.log(a);};let ans = "1 2 3".replace(/\d/g, fn);
  // [ '1', 0, '1 2 3' ]
  // [ '2', 2, '1 2 3' ]
  // [ '3', 4, '1 2 3' ]
*/

console.log(parseInt(Infinity, 19))
//前面说了，第一个参数 string 是要被解析的值，
//如果参数不是一个字符串，则将其转换为字符串，
//所以 Infinity 被转换成 "Infinity"，
//而 19 进制数中，最大的字符就是 i，代表 18，
//所以解析的时候遇到 n 就停了，所以输出 18