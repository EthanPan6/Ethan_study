<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="商品" />
      <van-tab title="书品" />
      <van-tab title="拍卖" />
      <van-tab title="商铺" />
    </van-tabs>
    <!-- what happend? -->
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/main/home");
    },
    onClickRight() {
      this.$router.push("/search");
    }
  }
};
</script>