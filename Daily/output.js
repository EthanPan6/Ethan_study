const { compile } = require('./01-template')


let html = '1{{你好}}2'

console.log(compile(html));