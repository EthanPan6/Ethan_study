const fs = require('fs')
async function isDir(path) {
    return new Promise((res, rej) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                rej(err)
                throw new Error('出错了');
                // if(err) throw err
            }
            res(stats.isDirectory())
        }
        )
    })
}
async function main(path) {
    let dirArr = [];
    fs.readdir(path, async (err, data) => {
        if (err) throw new Error('出错了');
        for (let i = 0; i < data.length; i++) {
            if (await isDir(path + '/' + data[i])) {
                dirArr.push(data[i])
            }
        }
        console.log(dirArr);

    })
    // return dirArr
}
main('./wwwroot')

