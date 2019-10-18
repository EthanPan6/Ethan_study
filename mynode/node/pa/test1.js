const http = require("http");
const fs = require("fs");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');//解决gbk
const Entities = require('html-entities').XmlEntities;//解决ascII转义
let entities = new Entities();


http.get("http://mcar.co/forum-oumeijuji-1.html", function (res) {
    var chunks = [];
    res.on('data', function (chunk) {
        chunks.push(chunk);
    });//将网页切割为buffer数组,iconv只能处理buffer
    res.on('end', function () {
        // let html = iconv.decode(Buffer.concat(chunks), 'gbk');
        let html = Buffer.concat(chunks)
        console.log(html)
        const $ = cheerio.load(html);
        fileData = entities.decode($("#portal_block_763_content").html())

        // console.log(fileData)

        fs.writeFile("./dist/jj.html", fileData, 'utf8', function (err) {
            if (err)
                return;
            console.log("成功")
        });
    });
});

// Or, with iconv-lite@0.4 and Node v0.10+, you can use streaming support with `collect` helper
// http.get("http://mcar.co/forum-oumeijuji-1.html", function (res) {
//     res.pipe(iconv.decodeStream('gbk')).collect(function (err, html) {
//         const $ = cheerio.load(html);
//         fileData = $("#portal_block_763_content").html()
//         console.log(fileData)
//     });
// });