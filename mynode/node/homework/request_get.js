const https = require("https")

var options = {
    hostname: 'api.douban.com',
    port: 443,
    method: 'GET',
    path: '/v2/movie/top250'
}

var request = https.request(options, (response) => {
    // console.log(response)
    console.log(response.statusCode)
    // console.log(response.headers)
})
request.on('error', error => {
    console.log(error)
})
request.end()