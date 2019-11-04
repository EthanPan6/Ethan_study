var express = require('express');
var router = express.Router();

/* GET home page. */
//改这里
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


const { find,insert } = require('../database/multiple');
// router.get('/entries', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let data = await find('element');
//   res.json(data);
// });

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


//https://blog.csdn.net/api/ArticleDigg/isDiggList
//https://www.csdn.net/api/articles?type=more&category=home&shown_offset=1572837969150326
module.exports = router;
