const https = require('https')
// const iconv = require('iconv-lite');
// const { insert } = require('./multiple')
let url = 'https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query=李白'
https.get(url, (res) => {
    // res.setEncoding('utf-8')
    let str = ''
    res.on('data', chunk => { str += chunk });
    res.on('end', () => {
        console.log(JSON.parse(str))

        // let entries = JSON.parse(str)[0].entries
        // entries.forEach(element => {
        //     insert('goodlist', [{ imgurl: element.image_hash, name: element.name }])
        // });
    }).on('error', e => { console.error(`出现错误:${e.message}`) })

})

