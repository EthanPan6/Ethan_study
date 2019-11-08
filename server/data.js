const http = require('http');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer((req, res) => {
    let { pathname } = url.parse(req.url, true);
    (async () => {
        let query = await p()
        if (!Object.keys(query).length) {
            query = url.parse(req.url, true).query;
        }
        console.log(query)
        
    })()
    function p() {
        return new Promise((reslove, reject) => {
            var str = "";
            req.on('data', function (data) {
                str += data;
            });
            req.on('end', function () {
                let ry = querystring.parse(str);//即得到JSON形式的数据。这种方式处理过POST请求的数据较为方便。
                reslove(ry)
            });
        }
        )
    }

})
// 监听端口
server.listen(7000);