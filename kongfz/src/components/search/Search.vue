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
    <!-- <van-tabs v-model="active">
      <van-tab title="商品" />
      <van-tab title="书品" />
      <van-tab title="拍卖" />
      <van-tab title="商铺" />
    </van-tabs>-->

    <router-view :resultT="resultlist" :inputState="putting" @inValue="changeV"></router-view>
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
      // active: 2,
      putting: false,
      resultlist: ""
    };
  },
  methods: {
    onSearch() {
      // window.console.log("onSearch");
      this.$router.push("/search/result?keyword=" + this.value);
      this.value = "";
      //回车触发
    },
    onCancel() {
      // window.console.log("onCancel");
      this.$router.push("/main/home");
    },
    input() {
      this.putting = true;
      window.console.log(this.putting);
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
    },
    changeV(b) {
      this.value = b;
    }
  },
  watch: {}
};

/*

//data.data.itemList
                                                                                    //params={"pagenum":1,"pagesize":10,"order":0,"status":0,                                                                           }

*/
</script>
<style scoped>
</style>