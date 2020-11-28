const http = require('http')



http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {
        'Content-type': 'text/html;charset="utf-8"'
    })
    res.write('this is a 哪个 message')
    res.end()
}).listen(8888, () => {
    console.log(`lisening  on 8888`);
})