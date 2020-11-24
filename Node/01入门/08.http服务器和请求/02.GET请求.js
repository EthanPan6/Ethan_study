const https = require('https')
const options = {
    hostname: 'localhost',
    port: 4433,
    path: '/todos',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`状态码: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()