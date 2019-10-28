var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/news', function (req, res, next) {
  res.append('Access-Control-Allow-Origin','*')
  res.json({
    "media_name": "新京报",
    "ban_comment": 0,
    "abstract": "新京报讯（记者 刘名洋 实习生 郭懿萌）今日（10月24日），新京报记者从河南新野县委宣传部了解到，河南籍中国人民解放军某部飞行员龚大川在执行飞行训练任务时以身殉职，年仅33岁。",
    "image_list": [],
    "datetime": "2019-10-25 08:18",
    "article_type": 0,
    "tag": "news_military",
    "has_m3u8_video": 0,
    "keywords": "龚大川,骨灰安葬仪式,新野县委宣传部,新野县,烈士陵园",
    "display_dt": 1571912068,
    "has_mp4_video": 0,
    "aggr_type": 1,
    "cell_type": 0,
    "article_sub_type": 0,
    "bury_count": 0,
    "title": "河南籍飞行员龚大川执行任务时牺牲获批烈士，年仅33岁",
    "source_icon_style": 1,
    "tip": 0,
    "has_video": false,
    "share_url": "http://m.toutiao.com/group/6751310925283721740/?app=news_article&is_hit_share_recommend=0",
    "source": "新京报",
    "comment_count": 0,
    "article_url": "http://www.bjnews.com.cn/news/2019/10/24/641255.html",
    "publish_time": 1571912068,
    "group_flags": 0,
    "middle_mode": true,
    "gallary_image_count": 1,
    "tag_id": "6751310925283721740",
    "source_url": "/i6751310925283721740/",
    "display_url": "http://toutiao.com/group/6751310925283721740/",
    "is_stick": false,
    "item_id": "6751310925283721740",
    "repin_count": 24,
    "cell_flag": 262155,
    "source_open_url": "sslocal://profile?uid=5540918998",
    "level": 0,
    "digg_count": 128,
    "behot_time": 1571962711,
    "hot": 0,
    "cursor": 1571962711999,
    "url": "http://www.bjnews.com.cn/news/2019/10/24/641255.html",
    "image_url": "https://p3.pstatp.com/list/pgc-image/RfoMpDiJ7KX7a0",
    "user_repin": 0,
    "has_image": true,
    "video_style": 0,
    "media_info": {
      "avatar_url": "http://p1.pstatp.com/large/8532/7581013616",
      "media_id": 5540918998,
      "name": "新京报",
      "user_verified": true
    },
    "group_id": "6751310925283721740"
  });
});

module.exports = router;