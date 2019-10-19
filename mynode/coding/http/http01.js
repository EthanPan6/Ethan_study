const http = require("http")
const https = require("https")

https.get('https://www.lagou.com', (res) => {
    let html = ''
    res.on('data', data => {
        html += data;
    })
    res.on('end', () => {
        console.log(html)
    })
    res.on('error', err => {
        console.log(err)
    })
})