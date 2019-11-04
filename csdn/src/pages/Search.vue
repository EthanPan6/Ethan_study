<template>
  <div>
    <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="content">
      <van-divider>热门搜索</van-divider>
      <van-tag plain type="primary" size="large">Python</van-tag>
      <van-tag plain type="primary" size="large">Java</van-tag>
      <van-tag plain type="primary" size="large">Spring boot</van-tag>
      <van-tag plain type="primary" size="large">PHP</van-tag>
      <van-tag plain type="primary" size="large">Vue</van-tag>
      <van-tag plain type="primary" size="large">Redis</van-tag>
      <van-tag plain type="primary" size="large">C++</van-tag>
      <van-tag plain type="primary" size="large">Linux</van-tag>
      <van-tag plain type="primary" size="large">Python基础教程</van-tag>
      <van-tag plain type="primary" size="large">C#</van-tag>
      <van-tag plain type="primary" size="large">Spring Cloud</van-tag>
      <van-tag plain type="primary" size="large">Docker</van-tag>
      <van-tag plain type="primary" size="large">Java学习路线</van-tag>
      <van-tag plain type="primary" size="large">元胞自动机</van-tag>
      <van-tag plain type="primary" size="large">C语言</van-tag>
      <br />

      <br />
      <van-divider>搜索历史</van-divider>
      <ul>
        <li v-for="(item, index) in list" :key="item.id" v-show="item.show">
          <van-icon name="search" />Python
          <van-icon name="cross" @click="clear(index)" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Search, Tag, Divider, Icon } from "vant";

Vue.use(NavBar)
  .use(Search)
  .use(Tag)
  .use(Divider)
  .use(Icon);
export default {
  data() {
    return {
      value: "keyword",
      list: [
        {
          id: 1,
          title: "项目一",
          show: true
        },
        {
          id: 2,
          title: "项目二",
          show: true
        },
        {
          id: 3,
          title: "项目三",
          show: true
        }
      ]
    };
  },
  methods: {
    onSearch() {
      window.console.log(this.value);
      //axios???
    },
    onClickLeft() {
      this.$router.push({ name: "home" });
    },
    clear(index) {
      window.console.log(" this tag has been deleted");

      this.list[index].show = !this.list[index].show;
    }
  }
};
</script>
<style  scoped>
.content {
  padding: 0.6em 0.8em;
}
.van-tag {
  font-size: 1em;
  margin-left: 0.8em;
  margin-bottom: 0.5em;
}
</style>
//搜索页1
//数据库读取搜索历史->渲染
//搜索时添加进数据库->渲染
//delete