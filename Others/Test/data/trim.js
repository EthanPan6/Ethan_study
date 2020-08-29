let str1 = "  a b c  ";
let str2 = str1.trim();
let str3 = str1.trimStart();
let str4 = str1.trimEnd();

console.log(str2, str2.length)//a b c 5
console.log(str3, str3.length)//a b c   7
console.log(str4, str4.length)//  a b c 7