const http = require("http");
const fs = require("fs");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');//解决gbk
const Entities = require('html-entities').XmlEntities;//解决ascII转义
let entities = new Entities();


http.get("http://mcar.co/forum-oumeijuji-1.html", function (res) {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', function () {
        const $ = cheerio.load(rawData);
        // fileData = $("#portal_block_763_content").html()
        // fileData = entities.decode($("#portal_block_763_content").html())
        console.log(fileData)

        fs.writeFile("./dist/jj.html", fileData, 'utf8', function (err) {
            if (err)
                return;
            console.log("成功")
        });
    });
});

