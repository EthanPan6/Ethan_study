<template>
  <div>
    <van-tabs @click="onFouce" v-model="activeName">
      <van-tab v-for="index in title" :title="index" :key="index" :name="index" :to="topath(index)">
        <Card v-for="(i,s) in Articles" :key="s" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import Card from "./Card";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      value: "",
      title: ["推荐", "动态", "前端", "安全", "架构", "数据库"],
      activeName: "推荐",
      Articles: [
        {
          title: "我可是title1",
          essay: "我可是文章",
          author: "我可是作者",
          asrc: "http://www.baidu.com",
          id: 654654
        },
        {
          title: "我可是title",
          essay: "我可是文章2",
          author: "我可是作者"
        },
        {
          title: "我可是title",
          essay: "我可是文章",
          author: "我可是作者3"
        },
        {
          title: "我可是title4",
          essay: "我可是文章",
          author: "我可是作者"
        },
        {
          title: "我可是title",
          essay: "我可是文章5",
          author: "我可是作者"
        }
      ]
    };
  },
  methods: {
    onFouce(val) {
      window.console.log(val);
      //获取tab名,没用
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
          path = "frontend";
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
      //同时发送axios获取相应数据
      path = "/main/home/" + path;
      return path;
    }
  },
  components: { Card }
};
//https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/search
//https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/icon
// 遍历生产link-to:https://segmentfault.com/q/1010000009884622
// 遍历生产link-to:https://blog.csdn.net/ColourfulTiger/article/details/80587316
</script>
<style  scoped>
.article-item {
  margin: 0 0.5em;
}

h3 {
  font-size: 1.2em;
}

p {
  font-size: 1em;
}

span {
  font-size: 0.8em;
}
</style>