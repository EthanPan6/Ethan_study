<template>
  <van-tabbar>
    <van-tabbar-item to="/main/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/main/study" icon="newspaper-o" dot>学习</van-tabbar-item>
    <van-tabbar-item to="/main/blink" icon="star-o" info="5">blink</van-tabbar-item>
    <van-tabbar-item to="/main/bbs" icon="comment-o" info="20">论坛</van-tabbar-item>
    <van-tabbar-item to="/main/mine" icon="user-circle-o" info="20">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";

import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {};
  }
};
</script>