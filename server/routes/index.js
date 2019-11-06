var express = require('express');
var router = express.Router();

/* GET home page. */
//改这里
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });


const { find, insert } = require('../database/multiple');
// router.get('/entries', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let data = await find('element');
//   res.json(data);
// });

router.get('/user', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('userlist', {});
  res.json(data);
});

// router.get('/restaurants', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let data = await find('restaurants');
//   res.json(data);
// });

// router.get('/login', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let key = req.query.token
//   const token = Buffer.from(key, 'base64').toString('utf8')
//   console.log(JSON.parse(token))
//   res.send(token);
// });


//推荐:https://www.csdn.net/api/articles?type=more&category=home
//前端:https://www.csdn.net/api/articles?type=more&category=web
//动态:https://www.csdn.net/api/articles?type=more&category=career
//架构:https://www.csdn.net/api/articles?type=more&category=arch
//安全:https://www.csdn.net/api/articles?type=more&category=sec
//数据库:https://www.csdn.net/api/articles?type=more&category=db
module.exports = router;
