<template>
  <van-grid :column-num="5">
    <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" />
  </van-grid>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid).use(GridItem);
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
// from:https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/grid
</script>