const qs = require('querystring')
let str1 = qs.stringify({
    name: 'zhangsan',
    age: 12,
    arr: ['a', 'b', ' c'],
    sk: ''
})
// console.log(str1) //name=zhangsan&age=12&arr=a&arr=b&arr=%20c&sk=
/*
    querystring.stringify(obj, [sep], [eq])

        obj：欲转换的对象

        sep：设置分隔符，默认为‘&’

        eq ：设置赋值符，默认为‘=’
*/


let obj1 = qs.parse('name=zhangsan&age=12&arr=a&arr=b&arr=%20c&sk=')
// console.log(obj1)  //[Object: null prototype] { name: 'zhangsan', age: '12', arr: [ 'a', 'b', ' c' ], sk: '' }
/*
    querystring.parse(str, [sep], [eq], [options])
        str:欲转换的字符串

        sep:设置分隔符，默认为 ‘&'

        eq:设置赋值符，默认为 ‘='

        [options]

            maxKeys:可接受字符串的最大长度，默认为1000

*/
let nn = qs.escape({
    from: '北京'
})

let n = qs.escape('北京')//%E5%8C%97%E4%BA%AC
let u = qs.unescape('%E5%8C%97%E4%BA%AC')//北京
console.log(n, u)