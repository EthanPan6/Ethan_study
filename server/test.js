const https = require('https')
// const iconv = require('iconv-lite');
// const { insert } = require('./multiple')
// let url = 'https://www.csdn.net/api/articles?type=more&category=home'
let url = 'https://m.kongfz.com/book/mobile/ajax/getPersonalRecommendItems?place=16'
https.get(url, (res) => {
    // res.setEncoding('utf-8')
    let str = ''
    res.on('data', chunk => { str += chunk });
    res.on('end', () => {

        // console.log(str)

        console.log(JSON.parse(str))

        // var decodedBody = iconv.decode(str, 'gbk'); // 或者gbk/gb2312等
        // console.log(decodedBody);

        // let entries = JSON.parse(str)[0].entries
        // entries.forEach(element => {
        //     insert('goodlist', [{ imgurl: element.image_hash, name: element.name }])
        // });

    }).on('error', e => { console.error(`出现错误:${e.message}`) })

    // console.log(res.data)
})
// headers: {
//     server: 'Tengine',
//     date: 'Wed, 06 Nov 2019 09:28:34 GMT',
//     'content-type': 'text/html; charset=utf-8',
//     'transfer-encoding': 'chunked',
//     connection: 'close',
//     'set-cookie': [
//       'acw_tc=2760828d15730325143824871e79a71a4742caf8495ba8db0463056d99d41d;path=/;HttpOnly;Max-Age=2678401'
//     ],
//     'content-encoding': 'gzip',
//     'cache-control': 'no-cache, no-store',
//     pragma: 'no-cache',
//     'strict-transport-security': 'max-age=86400'
//   }

