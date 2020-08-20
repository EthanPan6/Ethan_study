<template>
  <div>
    <div class="header">
      <img src="../../assets/logo.png" alt />
      <div class="searchbar">
        <van-search placeholder="商品名称 作者 出版社 ISBN" v-model="value" shape="round" @click="toSearch" />
      </div>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../assets/banner1.jpeg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner3.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner4.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner5.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner6.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner7.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner8.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>

    <ul class="nav">
      <li>
        <div class="img_box">
          <img src="../../assets/icon1.png" alt />
        </div>
        <div class="name">线装古籍</div>
      </li>

      <li>
        <div class="img_box">
          <img src="../../assets/icon2.png" alt />
        </div>
        <div class="name">民国旧书</div>
      </li>

      <li>
        <div class="img_box">
          <img src="../../assets/icon3.png" alt />
        </div>
        <div class="name">名人墨迹</div>
      </li>

      <li>
        <div class="img_box">
          <img src="../../assets/icon4.png" alt />
        </div>
        <div class="name">古玩杂项</div>
      </li>
      <li>
        <div class="img_box">
          <img src="../../assets/icon5.png" alt />
        </div>
        <div class="name">全部分类</div>
      </li>
    </ul>
    <ul class="menu">
      <li>
        <div class="title">
          <p>今日上新</p>
          <p>发现新上好书</p>
        </div>
        <div class="img_box">
          <img src="../../assets/m1.png" alt />
        </div>
      </li>
      <li>
        <div class="title">
          <p>书店排行榜</p>
          <p>发现口碑好店</p>
        </div>
        <div class="img_box">
          <img src="../../assets/m2.png" alt />
        </div>
      </li>
      <li>
        <div class="title">
          <p>新书频道</p>
          <p>发现孔网新书</p>
        </div>
        <div class="img_box">
          <img src="../../assets/m3.png" alt />
        </div>
      </li>
      <li>
        <div class="title">
          <p>藏书单</p>
          <p>为你推荐好书</p>
        </div>
        <div class="img_box">
          <img src="../../assets/m4.png" alt />
        </div>
      </li>
    </ul>
    <div class="h4"></div>
    <div class="auction">
      <h2>拍卖</h2>
      <div class="dv1">
        <div class="l">
          <div class="title">
            <p>全部拍卖</p>
            <p>日均4万余件拍品</p>
          </div>
          <div class="img_box">
            <img src="../../assets/pm1.png" />
          </div>
        </div>
        <div class="r">
          <div class="box">
            <div class="title">
              <p>艺术品专场</p>
              <p>名人字画墨迹等</p>
            </div>
            <div class="img_box">
              <img src="../../assets/pm2.png" />
            </div>
          </div>
          <div class="box">
            <div class="title">
              <p>低价拍卖</p>
              <p>1元起拍捡漏</p>
            </div>
            <div class="img_box">
              <img src="../../assets/pm3.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="dv2">
        <ul class="menu">
          <li>
            <div class="title">
              <p>珍本拍卖</p>
              <p>古籍善本</p>
            </div>
            <div class="img_box">
              <img src="../../assets/pm2.png" alt />
            </div>
          </li>
          <li>
            <div class="title">
              <p>今日热点</p>
              <p>每日必看</p>
            </div>
            <div class="img_box">
              <img src="../../assets/pm5.png" alt />
            </div>
          </li>
          <li>
            <div class="title">
              <p>大众拍卖</p>
              <p>大家都在拍</p>
            </div>
            <div class="img_box">
              <img src="../../assets/pm6.png" alt />
            </div>
          </li>
          <li>
            <div class="title">
              <p>三天热点</p>
              <p>热拍推荐</p>
            </div>
            <div class="img_box">
              <img src="../../assets/pm7.png" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="h4"></div>
    <div class="block1">
      <van-cell title="好书推荐" is-link value="更多" />
      <ul class="tuij">
        <li>
          <div class="img_box">
            <img src="../../assets/book1.jpg" alt />
          </div>
          <div class="title">羊之歌——我的回想</div>
          <div class="author">[日]加藤周一 著；翁家慧 译</div>
          <div class="price">
            <span>￥</span>
            <span>20</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book2.jpg" alt />
          </div>
          <div class="title">汗青堂丛书037·海上丝绸之路</div>
          <div class="author">[德]罗德里希·普塔克 著；史敏岳 译</div>
          <div class="price">
            <span>￥</span>
            <span>20</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book3.jpg" alt />
          </div>
          <div class="title">伦勃朗</div>
          <div class="author">[芬兰]唐克雷德·博雷纽斯（Tancred Borenius） 著；吴啸雷 译</div>
          <div class="price">
            <span>￥</span>
            <span>240</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book4.jpg" alt />
          </div>
          <div class="title">自指引擎（精装）</div>
          <div class="author">[日]圆城塔 著；丁丁虫 译</div>
          <div class="price">
            <span>￥</span>
            <span>31.05</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book5.jpg" alt />
          </div>
          <div class="title">马背上的朝廷：巡幸与清朝统治的建构，1680—1785（海外中国研究丛书·特别版）</div>
          <div class="author">[美]张勉治 著</div>
          <div class="price">
            <span>￥</span>
            <span>35.64</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book6.jpg" alt />
          </div>
          <div class="title">奉使辽金行程录(增订本)</div>
          <div class="author">赵永春 作者</div>
          <div class="price">
            <span>￥</span>
            <span>59.2</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book7.jpg" alt />
          </div>
          <div class="title">乱世的笑声</div>
          <div class="author">张俭 著</div>
          <div class="price">
            <span>￥</span>
            <span>32.46</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book8.jpg" alt />
          </div>
          <div class="title">漆涂师物语</div>
          <div class="author">赤木明登 著；袁璟、林叶 译</div>
          <div class="price">
            <span>￥</span>
            <span>30</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book9.jpg" alt />
          </div>
          <div class="title">告别的仪式</div>
          <div class="author">[法]西蒙娜·德·波伏瓦 著；孙凯 译</div>
          <div class="price">
            <span>￥</span>
            <span>45</span>
            <span>起</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/book10.jpg" alt />
          </div>
          <div class="title">且裁风尘：颜彩手绘私享课</div>
          <div class="author">雨湿空城 著</div>
          <div class="price">
            <span>￥</span>
            <span>25.83</span>
            <span>起</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="h4"></div>
    <div class="block2">
      <van-cell title="书单推荐" is-link value="更多" />
      <ul class="shud">
        <li>
          <div class="img_box">
            <img src="../../assets/dan1.jpg" alt />
          </div>
          <div class="desc">由法国权威报纸《世纪报》评选</div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/dan2.jpg" alt />
          </div>
          <div class="desc">好的文学可以照见时代精神</div>
        </li>
        <li>
          <div class="img_box">
            <img src="../../assets/dan3.jpg" alt />
          </div>
          <div class="desc">不徐不疾，得之于手而应于心</div>
        </li>
        <li>
          <div class="more">查看全部126个书单</div>
        </li>
      </ul>
    </div>
    <!-- <div class="h4"></div>
    <div class="block3">
      <van-cell title="新书广场" is-link value="更多" />
    </div>-->
    <div class="h4"></div>
    <div class="block4">
      <van-cell title="旧书——国学经典" is-link value="更多" />
      <ul class="gus">
        <div class="list" v-show="active===1">
          <li>
            <div class="l">
              <img src="../../assets/gs0.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>20</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">李贺诗集</div>
              <div class="author">李贺 / 人民文学出版社 / 1998-03 / 平装</div>
              <div class="desc"></div>
            </div>
          </li>
          <li>
            <div class="l">
              <img src="../../assets/gs1.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>16.8</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">百年河大国学旧著新刊：长江集新校</div>
              <div class="author">[唐]贾岛 著 / 河南大学出版社 / 2008-01 / 平装</div>
              <div class="desc">河南大学是一所有近百年历史的老校。自建校以来，一向重视国学研究，并形成了一支实力雄厚、传承有序的研究</div>
            </div>
          </li>
          <li>
            <div class="l">
              <img src="../../assets/gs2.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>40</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">刘长卿集编年校注</div>
              <div class="author">杨世明 / 人民文学出版社 / 1999-09 / 平装</div>
              <div class="desc">本书校勘务求简要。凡底本无误而他本误者，不出校记。凡各本有異文，如明显可断定底本脱讹者，改正底本文字</div>
            </div>
          </li>
        </div>
        <div class="list" v-show="active===2">
          <li>
            <div class="l">
              <img src="../../assets/gs3.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>26</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">刘长卿诗编年笺注（上下）</div>
              <div class="author">储仲君 / 中华书局 / 1996-07 / 平装</div>
              <div class="desc">刘长卿是唐朝大历时代的著名诗人，他的诗凝炼自然，造意清新。他自称为“五言长城”，并受到人们的认可。本</div>
            </div>
          </li>
          <li>
            <div class="l">
              <img src="../../assets/gs4.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>27</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">韦应物诗集系年校笺</div>
              <div class="author">孙望 著 / 中华书局 / 2002-03 / 平装</div>
              <div class="desc">经过安史之乱这场浩劫，唐帝国急遽没落，由盛唐时期转入中唐时期，这极大地影响了活跃在大压、贞元间士人的</div>
            </div>
          </li>
          <li>
            <div class="l">
              <img src="../../assets/gs5.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>35</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">孟浩然詩集箋註</div>
              <div class="author">[唐]孟浩然 著 / 上海古籍出版社 / 2000-05 / 精装</div>
              <div class="desc">《孟浩然诗集笺注（竖排繁体）》作者是盛唐著名诗人，他的诗清新高妙而又有奇逸之气。孟浩然的诗，虽然在他</div>
            </div>
          </li>
        </div>
        <div class="list" v-show="active===3">
          <li>
            <div class="l">
              <img src="../../assets/gs6.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>24</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">王维诗集</div>
              <div class="author">徐涛、孟柏 校点 / 上海古籍出版社 / 2017-07 / 精装</div>
              <div class="desc">王维是盛唐著名诗人，以写景诗负盛名，苏轼有“味摩诘之诗，诗中有画；观摩诘之画，画中有诗”的赞喻。《王</div>
            </div>
          </li>
          <li>
            <div class="l">
              <img src="../../assets/gs7.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>2.2</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">唐贺知章书孝经</div>
              <div class="author">历代碑帖法书选编辑组 编 / 文物出版社 / 1986-08 / 平装</div>
              <div class="desc">贺知章，字季真，自号四明狂客，会稽永兴人，唐显庆四年生，天宝三年卒，年八十六岁，是唐代著名诗人、书法</div>
            </div>
          </li>
          <li>
            <div class="l">
              <img src="../../assets/gs8.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>70</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">书林清话</div>
              <div class="author">叶德辉 撰 / 上海古籍出版社 / 2008-02 / 平装</div>
              <div class="desc">《书林清话（插图本）》是用笔记体记载了我国古代图书的历史知识和出版印刷史料，包括雕版源流、官刻、私刻</div>
            </div>
          </li>
        </div>
        <div class="list" v-show="active===4">
          <li>
            <div class="l">
              <img src="../../assets/gs9.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>135</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">王子安集注</div>
              <div class="author">王勃、蒋清翊 著 / 上海古籍出版社 / 1995-11 / 平装</div>
              <div class="desc">王勃，字子安，绛州龙门《今山西河津县》人。他的祖父是隋代大儒文中于王通，叔祖是唐初著名诗人王绩。王勃</div>
            </div>
          </li>
          <li>
            <div class="l">
              <img src="../../assets/gs10.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>6</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">李煜词集</div>
              <div class="author">[南唐]李煜 著；王兆鹏 导读 / 上海古籍出版社 / 2009-08 / 平装</div>
              <div class="desc">他是才子，是词人，是帝王。作为词人，他是成功的；作为帝王，却是失败的。然而，正是失败的帝王成全了词人</div>
            </div>
          </li>
          <li>
            <div class="l">
              <img src="../../assets/gs11.jpg" alt />
              <div class="price">
                <span>￥</span>
                <span>15.28</span>
                <span>起</span>
              </div>
            </div>
            <div class="r">
              <div class="title">诗话雅书：沧浪诗话（唯美插画版）</div>
              <div class="author">[宋]严羽 著 / 崇文书局 / 2018-05 / 平装</div>
              <div class="desc">《沧浪诗话》是一部妙作。它豪气惊人，拯救诗道，它以禅喻诗，主张顿悟。其改变了早期诗话作为茶馀饭后，“</div>
            </div>
          </li>
        </div>
      </ul>
      <van-button size="large" icon="replay" @click="change1">换一换</van-button>
    </div>
    <div class="h4"></div>
    <!-- <div class="block5">
      <van-cell title="新书-新近出版" is-link value="更多" />
      <van-button size="large" icon="replay">换一换</van-button>
    </div>-->
    <div class="recommend_area">
      <van-cell title="为您推荐" is-link value="更多" />
      <ul class="recommend_list">
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec1.jpg" alt="126315" />
          </div>
          <div class="title">《越南女兵档案》</div>
          <div class="middle_box">
            <div class="phase">九品</div>
            <div class="address">黄冈</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>99.9</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec2.jpg" alt />
          </div>
          <div class="title">毛选</div>
          <div class="middle_box clearfix">
            <div class="phase">九品</div>
            <div class="address">广州</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>187</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec3.jpg" alt />
          </div>
          <div class="title">百衲本二十四史（全260册）精装本</div>
          <div class="middle_box clearfix">
            <div class="phase">全新</div>
            <div class="address">杭州</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>62300</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec4.jpg" alt />
          </div>
          <div
            class="title"
          >中国断代史系列：殷商史 西周史 战国史 隋唐五代史 上 下 辽 金 西夏史 元史 明史 上 下 宋史 清 史 上 下 中华远古史 共13本合售 除 魏晋南北朝史 秦汉史 隋唐五代史外 其他全部全新 未拆封 全套13种16册合售</div>
          <div class="middle_box clearfix">
            <div class="phase">全新</div>
            <div class="address">十堰</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>4800</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec5.jpg" alt />
          </div>
          <div
            class="title"
          >甲骨文丛书（130种146册） 古代世界：追寻西方文明之源 傻瓜之光 帝国英雄：布尔战争、绝命出逃与青年丘吉尔 北京的隐秘角落 南京1937：血战危城 战争的余烬：法兰西殖民帝国的灭亡及美国对越南的干预（套装全2册） 中国革命：1925年5月30日，上海 安第斯山脉的生与死 在中国发现历史 紫禁城的荣光：明清全史 迦太基必须毁灭：古文明的兴衰 隐形军队：游击战的历史 拿破仑大帝（全2册）</div>
          <div class="middle_box clearfix">
            <div class="phase">九五品</div>
            <div class="address">深圳</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>6200</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec6.jpg" alt />
          </div>
          <div class="title">资治通鉴 全20册 精装</div>
          <div class="middle_box clearfix">
            <div class="phase">全新</div>
            <div class="address">上海</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>780</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec7.jpg" alt />
          </div>
          <div class="title">中国通史（第八册）</div>
          <div class="middle_box clearfix">
            <div class="phase">八五品</div>
            <div class="address">上海</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>300</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec8.jpg" alt />
          </div>
          <div class="title">射雕英雄传</div>
          <div class="middle_box clearfix">
            <div class="phase">九品</div>
            <div class="address">北京</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>380</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec9.jpg" alt />
          </div>
          <div class="title">四大名著精装 红楼梦 三国演义 西游记 水浒传 （套装共4册）</div>
          <div class="middle_box clearfix">
            <div class="phase">九五品</div>
            <div class="address">黄冈</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>3300</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec10.jpg" alt />
          </div>
          <div class="title">金庸作品集 （朗声新修版，全集共36册）</div>
          <div class="middle_box clearfix">
            <div class="phase">九五品</div>
            <div class="address">朝阳</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>278</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec11.jpg" alt />
          </div>
          <div class="title">2019新版初三9九年级上册英语书仁爱版初中9年级上册英语课本科普版教材义务教育教科书科学普及出版社9年级上册九上英语书仁爱版</div>
          <div class="middle_box clearfix">
            <div class="phase">全新</div>
            <div class="address">济南</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>25.08</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec12.jpg" alt />
          </div>
          <div class="title">未来简史：从智人到神人</div>
          <div class="middle_box clearfix">
            <div class="phase">九品</div>
            <div class="address">长春</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>7</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec13.jpg" alt />
          </div>
          <div class="title">建国以来毛泽东文稿【精装全13册缺第12、13册共11本】</div>
          <div class="middle_box clearfix">
            <div class="phase">九品</div>
            <div class="address">沈阳</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>1888</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec14.jpg" alt />
          </div>
          <div class="title">&lt;&lt;单田芳.&gt;&gt;传统评书系列带绣像十品未阅全一版一印不单卖共21本</div>
          <div class="middle_box clearfix">
            <div class="phase">九五品</div>
            <div class="address">长春</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>3000</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec15.jpg" alt />
          </div>
          <div class="title">痴情妹子【个人藏书】无写划，问题看图。</div>
          <div class="middle_box clearfix">
            <div class="phase">九品</div>
            <div class="address">福州</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>88</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec16.jpg" alt />
          </div>
          <div class="title">古拉格群岛（上中下）</div>
          <div class="middle_box clearfix">
            <div class="phase">八五品</div>
            <div class="address">北京</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>400</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec17.jpg" alt />
          </div>
          <div class="title">曾山传奇【历任国务院商业部部长、中共中央交通工作部部长、国务院内务部部长 曾 庆红之父 精装本】</div>
          <div class="middle_box clearfix">
            <div class="phase">九五品</div>
            <div class="address">葫芦岛</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>30</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec18.jpg" alt />
          </div>
          <div
            class="title"
          >中华书局1956年版1982年印资治通鉴【馆藏】第1/2/4/5/6/7/8/9/10/11/12/13/15/16/17/18/19/20册共18册合售【缺第3和14两册】</div>
          <div class="middle_box clearfix">
            <div class="phase">八五品</div>
            <div class="address">福州</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>399</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec19.jpg" alt />
          </div>
          <div class="title">当兵：华北根据地农民如何走向战场</div>
          <div class="middle_box clearfix">
            <div class="phase">九五品</div>
            <div class="address">保定</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>100</span>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img class="recommend_lazy" src="../../assets/rec20.jpg" alt />
          </div>
          <div class="title">红楼梦</div>
          <div class="middle_box clearfix">
            <div class="phase">九品</div>
            <div class="address">上海</div>
          </div>
          <div class="price">
            <span>￥</span>
            <span>320</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="no-more">- 没有更多 -</div>
    <div class="toTop" @click="toTop"></div>
    <div class="bottom" style="height:3em"></div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, Swipe, SwipeItem, Cell, Button } from "vant";

Vue.use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Cell)
  .use(Button);
export default {
  data() {
    return {
      value: "",
      active: 1
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    toSearch() {
      this.$router.push("/search");
    },
    change1() {
      this.active === 4 ? (this.active = 1) : this.active++;
    },
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  }
};
</script>
<style>
li {
  list-style: none;
}
.header {
  position: relative;
}
.header img {
  margin-left: 0.5em;
  width: 3em;
  height: 3em;

  /* flex: 1; */
}
.header .searchbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 20em;
  /* display: inline-block; */
}
.banner .van-swipe .van-swipe-item img {
  height: 10em;
}
.nav {
  margin: 0em auto;
  display: flex;
}
.nav li {
  flex: 1;
  margin: 0.9em;
}
.nav .img_box img {
  width: 100%;
}
.nav .name {
  font-size: 0.7em;
}
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.menu li {
  width: 47%;
  height: 4em;
  margin-bottom: 0.5em;
  background: #fafafa;
}
.menu li .title {
  float: left;
  padding-left: 1.2em;
  font-size: 0.8em;
  line-height: 1em;
}
.menu li .img_box {
  float: right;
}
.menu li .img_box img {
  width: 3em;
  padding-top: 1em;
  height: 3em;
}
.h4 {
  height: 0.4em;
  background: #f1f1f1;
}
.auction h2 {
  font-size: 1.2em;
  margin-left: 0.5em;
}
.auction .dv1 {
  display: flex;
  justify-content: space-around;
  height: 10em;
}
.auction .dv1 .l {
  width: 47%;
  background: #fafafa;
  margin-bottom: 0.5em;
}

.auction .dv1 .l .title {
  padding-left: 1.2em;
  font-size: 0.8em;
  line-height: 1em;
}
.auction .dv1 .l .img_box img {
  width: 100%;
}
.auction .dv1 .r {
  width: 47%;
}
.auction .dv1 .r .box {
  background: #fafafa;
  margin-bottom: 0.2em;
  height: 4.7em;
}
.auction .dv1 .r .box .title {
  padding-left: 1.2em;
  font-size: 0.8em;
  line-height: 1em;
  float: left;
}
.auction .dv1 .r .box .img_box {
  float: right;
}
.auction .dv1 .r .box .img_box img {
  width: 3em;
  padding-top: 1em;
  height: 3em;
}
.block1 .tuij {
  /* width: 20em; */
  /* overflow: hidden; */
  display: flex;
  overflow: auto;
}
.block1 .tuij li {
  flex-shrink: 0;
  width: 6em;
  margin-left: 1em;
}
.block1 .tuij li:last-child {
  margin-right: 1em;
}
.block1 .tuij li .img_box img {
  width: 6em;
  height: 8.4em;
}
.block1 .tuij li .title {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  font-size: 0.8em;
  padding-right: 0.2em;
}
.block1 .tuij li .author {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  font-size: 0.7em;
  color: #999;
}
.block1 .tuij li span:nth-child(1) {
  font-size: 0.6em;
  color: #9e100e;
}
.block1 .tuij li span:nth-child(2) {
  font-size: 0.8em;
  color: #9e100e;
}
.block1 .tuij li span:nth-child(3) {
  font-size: 0.7em;
}
.block2 .shud {
  display: flex;
  overflow: auto;
}
.block2 .shud li {
  flex-shrink: 0;
  width: 20em;
  margin-left: 1em;
}
.block2 .shud li:last-child {
  flex-shrink: 0;
  width: 6em;
  margin-left: 1em;
  position: relative;
}
.block2 .shud li .img_box img {
  height: 8.4em;
  width: 100%;
}
.block2 .shud li .more {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  text-align: center;
  width: 5em;
  height: 8em;
  font-size: 0.7em;
}
.block4 .gus {
  margin: 0 1em;
}
.block4 .gus li {
  width: 100%;
  height: 8em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
}
.block4 .gus li .l {
  position: relative;
  flex: 1;
}
.block4 .gus li .l img {
  width: 100%;
}
.block4 .gus li .l .price {
  position: absolute;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  left: 0;
  bottom: 1em;
  /* text-align: center; */
  background: rgba(158, 16, 14, 0.8);
  color: #fff;
  width: 5em;
  height: 2em;
  font-size: 0.8em;
  border-radius: 0 2em 2em 0;
}
.block4 .gus li .r {
  flex: 3;
  padding-left: 1em;
}
.block4 .gus li .r .title {
  font-weight: 700;
  color: #262626;
  overflow: hidden;
  font-size: 0.9em;
}
.block4 .gus li .r .author {
  font-size: 0.8em;
  color: #333;
}
.block4 .gus li .r .desc {
  font-size: 0.8em;
  color: #999;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.recommend_area {
  width: 100%;
}
.recommend_area .recommend_list {
  display: flex;
  flex-wrap: wrap;
  background-color: #f0f0f0;
}
.recommend_area .recommend_list li {
  margin: 0.3em;
  width: 9.1em;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  background-color: #fff;
}
.recommend_area .recommend_list li .img_box {
  width: 9.7em;
  height: 12em;
  position: relative;
  overflow: hidden;
}

.recommend_area .recommend_list li .img_box img {
  position: absolute;
  margin: auto;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  width: 8em;
}
.recommend_area .recommend_list li .title {
  width: 9.7em;
  height: 2.8em;
  font-size: 0.8em;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.recommend_area .recommend_list li .middle_box .phase {
  float: left;
  font-size: 0.8em;
  color: #999;
}
.recommend_area .recommend_list li .middle_box .address {
  float: right;
  font-size: 0.8em;
  color: #999;
}
.recommend_area .recommend_list li .price {
  color: #9e100e;
  font-size: 0.9em;
}
.no-more {
  text-align: center;
  height: 3em;
  line-height: 3em;
  color: #c2c2c2;
  background: #f8f8f8;
  font-size: 0.8em;
}
.toTop {
  position: fixed;
  right: 2em;
  bottom: 5em;
  width: 3em;
  height: 3em;
  z-index: 99;
  background: url(../../assets/toTop.png) center center no-repeat;
  background-size: 100%;
}
</style>