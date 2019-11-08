<template>
  <div>
    <div class="head">
      <div class="icon">
        <!-- <img :src="img" alt="头像" /> -->
      </div>
      <div class="info" @click="toW">
        <h2 class="name" v-text="username"></h2>
        <div class="signature">个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名</div>
      </div>
    </div>
    <div class="he"></div>
    <van-grid :border="false" class="card1">
      <van-grid-item class="card1-item" text="关注">
        <i>0</i>
        <i>关注</i>
      </van-grid-item>
      <van-grid-item class="card1-item" text="粉丝">
        <i>0</i>
        <i>粉丝</i>
      </van-grid-item>
      <van-grid-item class="card1-item" text="访问">
        <i>0</i>
        <i>访问</i>
      </van-grid-item>
      <van-grid-item class="card1-item" text="排名">
        <i>0</i>
        <i>排名</i>
      </van-grid-item>
    </van-grid>
    <div class="he"></div>
    <van-grid :column-num="5" :border="false" square>
      <van-grid-item text="博客" icon="newspaper-o" />
      <van-grid-item text="Blink" icon="star-o" />
      <van-grid-item text="帖子" icon="other-pay" />
      <van-grid-item text="视频课" icon="video-o" />
      <van-grid-item text="图文课" icon="coupon-o" />
      <van-grid-item text="书架" icon="todo-list-o" />
      <van-grid-item text="收藏" icon="flag-o" />
      <van-grid-item text="足迹" icon="browsing-history-o" />
      <van-grid-item text="勋章" icon="award-o" />
    </van-grid>
    <div class="hw"></div>
    <van-grid :column-num="5" :border="false" square>
      <van-grid-item text="消息" icon="envelop-o" />
      <van-grid-item text="签到" icon="certificate" />
      <van-grid-item text="优惠券" icon="bill-o" />
      <van-grid-item text="面试题" icon="question-o" />
      <van-grid-item text="抽奖" icon="point-gift-o" />
    </van-grid>
    <div class="hw"></div>
    <van-cell-group>
      <van-cell title="我的私密文章" value="0篇" icon="closed-eye" is-link />
      <van-cell title="粉丝趋势" icon="chart-trending-o" is-link />
    </van-cell-group>
    <div class="hw"></div>
    <van-cell-group>
      <van-cell title="产品反馈" icon="edit" is-link />
      <van-cell title="设置" icon="setting-o" is-link />
    </van-cell-group>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem, Icon, Divider, Cell, CellGroup } from "vant";
// import Jpg from "@/assets/author.jpg";

import VueCookies from "vue-cookies";
Vue.use(VueCookies)
  .use(Grid)
  .use(GridItem)
  .use(Icon)
  .use(Divider)
  .use(Cell)
  .use(CellGroup);
export default {
  data() {
    return {
      // img: Jpg,
      username: "用户名"
    };
  },
  mounted() {
    if (this.$cookies.isKey("token")) {
      this.username = "用户名";
    } else {
      this.username = "请登录";
    }
  },
  methods: {
    toW() {
      window.console.log("去哪儿");
      if (this.$cookies.isKey("token")) {
        this.$router.push("/main/mine");
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: {}
};
</script>
<style  scoped>
.head {
  height: 8em;
  width: 100%;
  display: flex;
}
.head .icon {
  padding-left: 1em;
  width: 8em;
  height: 8em;
  text-align: center;
  line-height: 13em;
}
.head .icon img {
  width: 5em;
  height: 5em;
  border-radius: 50%;
}
.head .info {
  flex: 1;
  padding: 1.2em 1em;
}
.head .info h2 {
  font-size: 1.2em;
  margin-bottom: 0.4em;
}
.head .info .signature {
  width: 14em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #111;
}
.he {
  background-color: #eee;
  height: 0.2em;
}
.hw {
  background-color: #eee;
  height: 0.5em;
}
.card1 {
  height: 4em;
}

.card1 .card1-item {
  display: flex;
  flex-direction: column;
}
.card1 .card1-item i {
  font-style: normal;
}
</style>