const url = require('url')
// console.log(url.parse('http://www.baidu.com'))
// console.log(url.parse('http://www.baidu.com:8888/asa?from=sdasd&course=asdas#das1'))
// console.log(url.parse('//www.baidu.com'), true)
// console.log(url.parse('//www.baidu.com:8888/asa?from=sdasd&course=asdas#das1'), true)
// console.log(url.parse('//www.baidu.com:8888/asa?from=sdasd&course=asdas#das1'), true, true)
let show =
    url.format({
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: '#das1',
        search: '?from=sdasd&course=asdas',
        query: 'from=sdasd&course=asdas',
        pathname: '//www.baidu.com:8888/asa',
        path: '//www.baidu.com:8888/asa?from=sdasd&course=asdas',
        href: '//www.baidu.com:8888/asa?from=sdasd&course=asdas#das1'
    }, true, true)
// console.log(show)
let show2 = url.resolve('http://www.baidu.com', '/api/sda.s')
console.log(show2)