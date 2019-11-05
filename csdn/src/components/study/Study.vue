<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="imgs" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5">
      <van-grid-item icon="play-circle" text="视频课" />
      <van-grid-item icon="column" text="图文课" />
      <van-grid-item icon="bookmark" text="电子书" />
      <van-grid-item icon="bars" text="面试题" />
      <van-grid-item icon="like" text="霸王课" />
    </van-grid>
    <van-tabs v-model="active">
      <van-tab title="直播">
        <van-cell title="路由跳转" is-link to="index" value="更多" value-class="f80" />
        <van-panel title="标题" desc="描述信息" status="状态">
          <div>
            内容
            <van-button size="small">按钮</van-button>
            <van-button size="small" type="danger">按钮</van-button>
          </div>
          <!-- <div slot="footer"> -->

          <!-- </div> -->
        </van-panel>
      </van-tab>
      <van-tab title="霸王课">内容 2</van-tab>
      <van-tab title="会员兑换">内容 3</van-tab>
      <van-tab title="精品推荐">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Cell,
  Tab,
  Tabs,
  Panel,
  Button
} from "vant";

Vue.use(Search)
  .use(Swipe)
  .use(Button)
  .use(SwipeItem)
  .use(Panel)
  .use(Lazyload)
  .use(Grid)
  .use(Tabs)
  .use(GridItem)
  .use(Cell)
  .use(Tab);
export default {
  data() {
    return {
      title: "Study",
      value: "",
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  }
};
//直播日历:https://edu.csdn.net/huiyiCourse/cale
</script>
<style >
.imgs {
  height: 10em;
  width: 100%;
}
.f80 {
  color: #f80;
}
</style>