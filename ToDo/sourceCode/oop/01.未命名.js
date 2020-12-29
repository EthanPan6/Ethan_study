function copy(obj) {//浅拷贝
    var result = {};
    for (var attr in obj) {
        result[attr] = obj[attr]
    }
    return result;
}
function copyDeep(obj) {
    let result = {};
    for (let attr in obj) {
        result[attr] = (typeof obj[attr] == 'object') ? copyDeep(obj[attr]) : obj[attr]
    }
    return result;
}
//问题存在:typeof无法判断其他对象类型
let person = {
    anme: 'a',
    like: [1, 2, 3]
}

let p1 = copyDeep(person);
let p2 = copy(person)

p1.like[0] = 5;
p2.like[3] = 9
console.log(person);
console.log(p1);
console.log(p2);

function getType(params) {
    let type=Object.prototype.toString.call(params)
    return 
}

console.log(getType('sdjjd'));