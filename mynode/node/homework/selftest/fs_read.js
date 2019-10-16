var fs = require('fs')
fs.readFile('logs/hello.js', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log('success')
        console.log(data.toString())
    }
})