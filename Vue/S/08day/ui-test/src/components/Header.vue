<template>
  <van-nav-bar title="标题" />
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
      //   Toast("返回");
      window.console.log(1);
    },
    onClickRight() {
      //   Toast("按钮");
      window.console.log(2);
    }
  }
};
</script>
