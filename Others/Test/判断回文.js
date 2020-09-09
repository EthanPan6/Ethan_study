/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // let numStr = x.toString()
    // let revNum = numStr.split("").reverse().join("")
    // return numStr == revNum


    if (x < 0) return false;
    var cur = 0,
        num = x;

    while (num != 0) {
        cur = cur * 10 + Math.floor(num % 10);
        num = Math.floor(num / 10);
    }
/*
cur=0+1
num=12

cur=10+2=12
num=1

cur=120+1
num=0


*/


    return cur == x;


};


console.log(isPalindrome(121));