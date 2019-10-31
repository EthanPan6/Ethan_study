<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);
export default {};
</script>