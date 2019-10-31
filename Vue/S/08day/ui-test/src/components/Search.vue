<template>
  <form action="/">
    <van-search label="地址" v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </form>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      window.console.log("onSearch");
    },
    onCancel() {
      window.console.log("onCancel");
    }
  }
};
</script>