let str1 = new String('A');
let str2 = String('A');

console.log(str1 == str2);
console.log(str1 === str2);

console.log(typeof str1);
console.log(typeof str2);

/*
true
false
object
string
*/

console.log(typeof new Number(55));//object
console.log(typeof Number(55));//number
