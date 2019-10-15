var fs = require('fs')
fs.writeFile('logs/hello.js', 'hello ~ \n', error => {
    if (error) {
        console.log(error)
    } else {
        console.log('success')
    }
})
fs.appendFile('logs/hello.js', 'hello ~ \n', error => {
    if (error) {
        console.log(error)
    } else {
        console.log('success')
    }
})