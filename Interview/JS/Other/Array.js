/*
所有题目公用一个上下文，已知数组：
let arr = [1,2,,3];
1. arr的长度是多少？            4
2. 去除arr中的空数组项;
3. arr2 = arr.map(parseInt)，请写下arr2的内容;  [1,NaN,NaN]
4. arr和arr2合并成数组arr3。
5. 去除数组arr3中重复内容
*/


let arr = [1, 2, , 3];
let len=arr.length;
arr = arr.filter(Boolean)
arr2 = arr.map(parseInt)
let arr3 = [...arr, ...arr2]
let arr4 = Array.from(new Set(arr3))
