const express = require('express')
// const path = require('path')
// const bodyParser = require('body-parser')
const request = require('request') //调用node
const app = express()
// const jsonParser = bodyParser.json()
// let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/代理跨域的域名', (req, res => {
    request('http://需要跨域的域名', (err, response, body) => {
        res.send('这就是返回的数据:' + body)
    })
}))
app.listen(1234, () => {
    console.log(1234)
})