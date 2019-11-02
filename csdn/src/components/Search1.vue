<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch">
      <div slot="action">
        <van-icon name="scan" size="2em" />
      </div>
    </van-search>

  </div>
</template>
<script>
import Vue from "vue";
import { Search, Icon } from "vant";

Vue.use(Search).use(Icon);
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