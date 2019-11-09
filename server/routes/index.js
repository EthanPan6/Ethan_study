const express = require('express');
const URL = require('url')
const https = require('https');
// const querystring = require('querystring');
const router = express.Router();

let url2 = 'https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query='
//https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query=%E6%9D%8E%E7%99%BD

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
var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/";
MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("kongfz");

  //limit(2)查询2条
  router.get('/result', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let params = URL.parse(req.url, true).query;//get请求获取参数
    dbo.collection("resultList").find({ 'itemName': params.key }).limit(parseInt(params.count)).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      // db.close();
    });

  });




});
module.exports = router;
  //增
  // var myobj = { name: "菜鸟教程", url: "www.runoob" };
  // dbo.collection("site").insertOne(myobj, function (err, res) {
  //   if (err) throw err;
  //   console.log("文档插入成功");
  //   db.close();
  // });

  //指定查询
  // var dbo = db.db("runoob");
  // var whereStr = { "name": '菜鸟教程' };  // 查询条件
  // dbo.collection("site").find(whereStr).toArray(function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

// let url1 = 'https://m.kongfz.com/api-search/product/search/mobile?bizType=wap&host=msearch&params='

//https://m.kongfz.com/api-search/product/search/mobile?bizType=wap&host=msearch&params=%7B%22pagenum%22:1,%22pagesize%22:10,%22status%22:0,%22key%22:%22%E6%9D%8E%E7%99%BD%22%7D
//
//url1后面加对象
//%7B%22pagenum%22:%221%22,%22pagesize%22:%2210%22,%22key%22:%22%E6%9D%8E%E7%99%BD%22%7D"
//%7B%22pagenum%22:1,%22pagesize%22:10,%22key%22:%22keyword%22%7D
//{"pagenum":1,"pagesize":10,"key":"keyword"}
//%7B"pagenum":1,"pagesize":10,"key":"keyword"%7D
//第几页：1，一页多少：10，关键字：keyword

// const { find, insert } = require('../database/multiple');



//api失效
// router.get('/result', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let params = URL.parse(req.url, true).query;//get请求获取参数
//   // let query = encodeURI(JSON.stringify(params))//转义，去{}
//   let query = `%7B"pagenum":${params.pagenum},"pagesize":10,"status":0,"key":"${params.key}"%7D`;
//   console.log(params)
//   // res.json(url1 + query)
//   let tUrl = url1 + query
//   console.log(tUrl)
//   https.get(tUrl, {
//     headers: {
//       // 'Host': 'm.kongfz.com'
//     }
//   }, (result) => {//字符串+数组=?
//     result.setEncoding('utf-8')
//     let str = ''
//     result.on('data', chunk => { str += chunk });
//     result.on('end', () => {
//       res.json(JSON.parse(str))
//     }).on('error', e => { console.error(`出现错误:${e.message}`) })
//   }
//   )
// });

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



  // router.get('/goods', async function (req, res, next) {
  //   res.append('Access-Control-Allow-Origin', '*');
  //   let params = URL.parse(req.url, true).query;//get请求获取参数

  //   dbo.collection("resultList").find({ '_id': params.id }).toArray(function (err, result) {
  //     if (err) throw err;
  //     res.json(result);
  //     // db.close();
  //   });
  // })