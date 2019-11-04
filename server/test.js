const https = require('https')
// const { insert } = require('./multiple')
https.get('https://f.m.suning.com/api/getWapIndexProTagNew.do?u=&c=157268062836476139&cityCode=020&sceneIds=25-56&count=300&flag=1&channel=322&sceneIds2=11-37&count2=20&terminal=wap&callback=getWapIndexProTagNew', (res) => {
    res.setEncoding('utf-8')
    let str = ''
    res.on('data', chunk => { str += chunk });
    res.on('end', () => {
        let msg = str.slice(21, -2)
        console.log(JSON.parse(msg).data.sugGoods[0].skus)

        // console.log(JSON.parse(str)[0].entries)
        // let entries = JSON.parse(str)[0].entries
        // entries.forEach(element => {
        //     insert('goodlist', [{ imgurl: element.image_hash, name: element.name }])
        // });

    }).on('error', e => { console.error(`出现错误:${e.message}`) })

})