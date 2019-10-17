var fs = require('fs')

fs.rename('logs/hello.js', 'logs/hi.js', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('success')
        // console.log(files)
    }
})