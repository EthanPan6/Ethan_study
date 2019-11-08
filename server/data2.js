const http = require('http');
const https = require('https');
const url = require('url');
const querystring = require('querystring');
let url2 = 'https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query='

let server = http.createServer((req, res) => {
    let { pathname } = url.parse(req.url, true);
    (async () => {
        let query = await p()
        if (!Object.keys(query).length) {
            query = url.parse(req.url, true).query;
        }
        // console.log(query)
        https.get(url2 + query.age, (res1) => {
            res1.setEncoding('utf-8')
            let str = ''
            res1.on('data', chunk => { str += chunk });
            res1.on('end', () => {
                console.log(JSON.parse(str))
                res1.JSON(JSON.parse(str))
            }).on('error', e => { console.error(`出现错误:${e.message}`) })
        })
    })()
    function p() {
        return new Promise((reslove, reject) => {

        }
        )
    }
})
// 监听端口
server.listen(7000);