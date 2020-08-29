function bj(s1, s2) {
    return s1 == s2 ? `${s1}=${s2}` : s1 > s2
}
// console.log(bj('a', 'A')) //false
// console.log(bj('a', 'B')) //a=a
// console.log(bj('ab', 'aa')) //true
// console.log(bj('aa', 'ab')) //falseAB

// console.log('Zzdd4515'.codePointAt(5));

let fruits = ["Apple", "Orange"];

// console.log(fruits.unshift("Pear"), fruits) //


//splice

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//删除元素
// console.log(numArr.splice(2, 3), numArr); //[ 3, 4, 5 ] [ 1, 2, 6, 7, 8, 9 ]
//添加元素元素
// console.log(numArr.splice(2, 0, 1, 1, 1), numArr); //[] [ 1, 2, 1, 1, 1, 6, 7, 8, 9 ]

let arr1 = [1, 1];
let arr2 = [2, 2];
let arr3 = [3, 3];

// console.log(arr1.concat(arr2, arr3), arr1, arr2) //[ 1, 1, 2, 2, 3, 3 ] [ 1, 1 ] [ 2, 2 ]

//slice

console.log(numArr.slice(5), numArr)
// console.log(numArr.slice(-2, 5), numArr)