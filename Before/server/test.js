const https = require('https')
// const iconv = require('iconv-lite');
const { insert } = require('./database/multiple')
let url = 'https://m.kongfz.com/api-search/product/search/mobile?bizType=wap&host=msearch&params='
// let url = 'https://m.kongfz.com/api-search/product/search/mobile?bizType=wap&host=msearch&params=%7B"pagenum":1,"pagesize":10,"status":0,"key":"李白"%7D'
let params = {
    pagenum: 3,
    pagesize: 10,
    key: '杜甫',
    status: 0
}
let string = `%7B"pagenum":${params.pagenum},"pagesize":10,"status":0,"key":"${params.key}"%7D`
// setInterval(()=>{

// },3000)

https.get(url + string, (res) => {
    res.setEncoding('utf-8')
    let str = ''
    res.on('data', chunk => { str += chunk });
    res.on('end', () => {
        let itemList = JSON.parse(str).data.itemList
        console.log(itemList)
        itemList.forEach(element => {
            insert('resultList', [{
                normalImg: element.normalImg,
                itemName: element.itemName,
                importantDesc: element.importantDesc,
                author: element.author,
                price: element.price,
                quality: element.quality,
                shopName: element.shopName

            }])

        })

    }).on('error', e => { console.error(`出现错误:${e.message}`) })

})

