<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="商品名称 作者 出版社 ISBN"
        show-action
        left-icon
        @input="input"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-tabs v-model="active">
      <van-tab title="商品" />
      <van-tab title="书品" />
      <van-tab title="拍卖" />
      <van-tab title="商铺" />
    </van-tabs>

    <div class="s-his">
      <van-cell-group class="result" v-show="putting">
        <van-cell v-for="item in resultlist" :key="item" :title="item" @click="jiu(item)" />
      </van-cell-group>

      <van-cell title="历史搜索">
        <van-icon slot="right-icon" name="delete" style="line-height: inherit;" @click="clear" />
      </van-cell>
      <van-tag size="medium">三毛</van-tag>
      <van-tag size="medium">三毛</van-tag>
      <van-tag size="medium">三毛</van-tag>
      <van-tag size="medium">三毛</van-tag>
      <van-tag size="medium">三毛</van-tag>
      <van-tag size="medium">三毛</van-tag>
      <van-tag size="medium">三毛</van-tag>
    </div>
    <div class="s-pop">
      <van-cell title="热门搜索" />
      <van-tag size="medium">加缪</van-tag>
      <van-tag size="medium">理想国译丛</van-tag>
      <van-tag size="medium">甲骨文丛书</van-tag>
      <van-tag size="medium">点校本二十四史</van-tag>
      <van-tag size="medium">中国碑帖名品</van-tag>
      <van-tag size="medium">东京梦华录</van-tag>
      <van-tag size="medium">大家小书</van-tag>
      <van-tag size="medium">藤泽周平</van-tag>
      <van-tag size="medium">徐霞客游记</van-tag>
      <van-tag size="medium">汪曾祺</van-tag>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, Tab, Tabs, Cell, Tag, Icon, CellGroup } from "vant";
import axios from "axios";
const url1 = "http://localhost:3000/search";

Vue.use(Search)
  .use(Tab)
  .use(Tabs)
  .use(Cell)
  .use(Tag)
  .use(Icon)
  .use(CellGroup);
export default {
  data() {
    return {
      value: "",
      active: 2,
      putting: false,
      resultlist: ""
    };
  },
  methods: {
    onSearch() {
      window.console.log("onSearch");
      this.$router.push("/search/result?keyword=" + this.value);
      this.value = "";
      //回车触发
    },
    onCancel() {
      // window.console.log("onCancel");
      this.$router.push("/main/home");
    },
    clear() {
      window.console.log("clear");
    },
    jiu(a) {
      this.value = a;
    },
    input() {
      this.putting = true;
      axios
        .get(url1, {
          params: {
            searchtext: this.value
          }
        })
        .then(data => {
          window.console.log(data.data.data);
          this.resultlist = data.data.data;
        });
    }
  }
};

/*
https://m.kongfz.com/api-search/product/search/mobile?bizType=wap&host=msearch&params=%7B%22pagenum%22:1,%22pagesize%22:10,%22key%22:%22毛泽东%22%7D
//data.data.itemList
                                                                                    //params={"pagenum":1,"pagesize":10,"order":0,"status":0,                                                                           }

*/
</script>
<style scoped>
.s-his {
  height: 15em;
  position: relative;
}
.van-tag {
  margin-left: 1em;
  margin-bottom: 0.5em;
}
.fake {
  position: relative;
}
.s-his .result {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 15em; */
  background-color: #fff;
  z-index: 99;
  line-height: 2em;
  padding-left: 1em;
  font-size: 1em;
}
.s-his .result li {
  height: 2em;

  border-bottom: 1px solid #000;
}
.gborder {
  border-bottom: 1px solid #000;
}
</style>