const http = require('http')
const fs = require('fs')

http.get('http://mcar.vip/yunmp4/3154123207545720.mp4', {
    headers: {
        Accept: '*/*',

        Connection: 'keep-alive',
        DNT: 1,
        Host: ' hz189cloud.oos-hz.ctyunapi.cn',
        Range: ' bytes=0-844257791',
        Referer: 'http://mcar.co/thread-33981-1-1.html'
    }
}, res => {
    res.pipe(fs.createWriteStream('file.mp4'))
    console.log(666)
})