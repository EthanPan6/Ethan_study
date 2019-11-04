<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="技术区" to="/main/bbs/jishu" />
      <van-tab title="生活区" to="/main/bbs/shenghuo" />
      <router-view />
    </van-tabs>

    <van-icon name="wap-nav" />
    <van-icon name="orders-o" />
    <van-icon name="edit" @click="toEdit" />
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Icon } from "vant";

Vue.use(Tab)
  .use(Tabs)
  .use(Icon);
export default {
  methods: {
    toEdit() {
      this.$router.push("/"); //编辑页
    }
  }
};
</script>
<style  scoped>
.van-tabs {
  width: 10em;
}
.van-icon {
  position: absolute;
  font-size: 1.5em;
}
.van-icon-orders-o {
  right: 0.5em;
  top: 0.4em;
}
.van-icon-wap-nav {
  right: 1.5em;
  top: 0.4em;
}
.van-icon-edit {
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  line-height: 1.6em;
  text-align: center;
  color: #fff;
  background-color: #f00;
  font-size: 1.6em;
  right: 1.2em;
  bottom: 3em;
}
</style>