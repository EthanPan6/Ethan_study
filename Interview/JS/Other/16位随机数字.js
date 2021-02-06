//请生成一个16位的随机数字；
function romdom16() {
    let str = ''
    for (let i = 0; i < 16; i++) {
        str += Math.random() * 10 | 0
    }
    return str
}
console.log(romdom16());
console.log(romdom16());
console.log(romdom16());
console.log(romdom16());
console.log(romdom16());