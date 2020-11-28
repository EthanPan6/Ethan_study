const express = require('express')
const { readFileSync } = require('fs')
const { resolve } = require('path')
// const data = require('./data')
const app = express()

// console.log(data);
app.get('/remove', (req, res) => {
    let todoList = JSON.parse(readFileSync(resolve(__dirname, 'todo.json')))
    res.send(todoList)
})

// app.get('/', function (req, res, next) {
//     console.log("11");
// next()
// });
// app.get('/', function (req, res, next) {
//     console.log("22");
//     next()
// })
// 上面两个相同的路由等同于下面这个合并的
app.get('/', [function (req, res, next) {
    console.log("11");
    // next()
}, function (req, res, next) {
    console.log("22");
    next()
}])

app.listen(7000, () => {
    console.log('listing on 7000');
})
