// 有如下字符串：
// var str = 'CanvasRenderingContext2D';
// 1. 字符串去重，返回新的不重复字符串，假设变量名是str2。
// 2. 字符串反向排列，返回str2的反向排列字符串，假设变量名是str3。
// 3. 返回str3字符串中大写字母的个数

var str = 'CanvasRenderingContext2D';

var str2 = unique(str);
var str3 = reverse(str2);
var count = countUpLowerChar(str3)

function unique(str) {
    var temp = [...str]
    return Array.from(new Set(temp)).join('');
}

function reverse(str) {
    return [...str].reverse().join('')
}
function countUpLowerChar(str) {
    let len = str.length;
    let count = 0
    for (let i = 0; i < len; i++) {
        if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) count++
    }
    return count
}