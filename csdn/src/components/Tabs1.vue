<template>
  <div>
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      window.console.log("search");
      //回车键触发
    }
  }
};
//https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/search
//https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/icon
</script>