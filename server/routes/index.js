const express = require('express');
const URL = require('url')
const https = require('https');
const querystring = require('querystring');
const router = express.Router();
let url2 = 'https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query='

/* GET home page. */
//改这里
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });


const { find, insert } = require('../database/multiple');

router.get('/search', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let params = URL.parse(req.url, true).query;//get请求获取参数
  https.get(url2 + params.searchtext, (result) => {
    result.setEncoding('utf-8')
    let str = ''
    result.on('data', chunk => { str += chunk });
    result.on('end', () => {
      res.json(JSON.parse(str))
    }).on('error', e => { console.error(`出现错误:${e.message}`) })
  })
});


/*
router.post('/', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  var str = "";
  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {
    let ry = querystring.parse(str);//即得到JSON形式的数据。这种方式处理过POST请求的数据较为方便。
    reslove(ry)

  });

  // 存在异步问题，后面想办法


  https.get(url2 + params.age, (result) => {
    result.setEncoding('utf-8')
    let str = ''
    result.on('data', chunk => { str += chunk });
    result.on('end', () => {
      res.json(JSON.parse(str))
    }).on('error', e => { console.error(`出现错误:${e.message}`) })
  })
});

*/



// router.get('/user', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let data = await find('userlist', {});
//   res.json(data);
// });

// router.get('/test', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   var str = "";
//   req.on("data", function (chunk) {
//     str += chunk;
//   });
//   req.on("end", function () {
//     console.log(str);
//     res.end("ok");
//   });
// });





// router.get('/login', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let key = req.query.token
//   const token = Buffer.from(key, 'base64').toString('utf8')
//   console.log(JSON.parse(token))
//   res.send(token);
// });


module.exports = router;
