<template>
  <div>
    <van-tabs @click="onFouce" v-model="activeName">
      <van-tab v-for="index in title" :title="index" :key="index" :name="index" :to="topath(index)">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </van-tab>
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
      value: "",
      title: ["推荐", "动态", "前端", "安全", "架构", "数据库"],
      activeName: "推荐"
    };
  },
  methods: {
    onFouce(val) {
      window.console.log(val);
      return val;
    },
    topath(index) {
      let path = "";
      switch (index) {
        case "推荐":
          path = "recommend";
          break;
        case "动态":
          path = "trends";
          break;
        case "前端":
          path = "fontback";
          break;
        case "安全":
          path = "safety";
          break;
        case "架构":
          path = "architecture";
          break;
        case "数据库":
          path = "sql";
          break;
      }
      return path;
    }
  },
  components: {}
};
//https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/search
//https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/icon
</script>