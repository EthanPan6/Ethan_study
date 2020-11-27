const express = require('express')
const { readFileSync } = require('fs')
const { resolve } = require('path')
const data = require('./data')
const app = express()

console.log(data);
app.get('/remove', (req, res) => {
    let todoList = JSON.parse(readFileSync(resolve(__dirname, 'todo.json')))
    console.log(todoList);
    // console.log(555);
    res.send('ok')
})
app.listen(7000, () => {
    console.log('listing on 7000');
})
