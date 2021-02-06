//已知一个非空字符串变量 str，请基于 str 生成一个16位的随机数字，也就是不同的 str 值随机数字不同，但是相同的 str 值生成的随机数是一样的。

function stringToNumber() {
    let strMap = {};
    return function (str) {
        if (strMap.hasOwnProperty(str)) return strMap[str]
        strMap[str] = romdom16()
        return strMap[str]
    }
}
function romdom16() {
    let str = ''
    for (let i = 0; i < 16; i++) {
        str += Math.random() * 10 | 0
    }
    return str
}

let func = stringToNumber()




console.log(func('adc'));
// console.log(func(999));
console.log(func('bac'));
console.log(func('adc'));
// console.log(func(999));
console.log(func('bac'));