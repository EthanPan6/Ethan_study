<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/main/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/main/shop" icon="orders-o">书店</van-tabbar-item>
    <van-tabbar-item to="/main/auction" icon="clock-o">拍卖</van-tabbar-item>
    <van-tabbar-item to="/main/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/main/mine" icon="user-circle-o" dot>我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";

import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>