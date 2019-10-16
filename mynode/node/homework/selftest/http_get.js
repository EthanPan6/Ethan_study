var https = require("https")
var url = 'https://www.lagou.com/'
https.get(url, function (res) {
    var html = ''
    res.on('data', function (data) {
        html += data
    })
    res.on('end', function () {
        console.log(html)
    })
    res.on('error', function (err) {
        console.log(err)
    });
});