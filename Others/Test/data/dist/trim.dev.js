"use strict";

var str1 = "  a b c  ";
var str2 = str1.trim();
var str3 = str1.trimStart();
var str4 = str1.trimEnd();
console.log(str2, str2.length); //a b c 5

console.log(str3, str3.length); //a b c   7

console.log(str4, str4.length); //  a b c 7