<template>
  <div>
    <div class="s-his">
      <van-cell-group class="result">
        <van-cell v-for="item in resultT" :key="item" :title="item" @click="jiu(item)" />
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
import { Tag, Icon, CellGroup } from "vant";

Vue.use(Tag)
  .use(Icon)
  .use(CellGroup);
export default {
  props: ["resultT", "inputState"],
  data() {
    return {
      state: false
    };
  },
  beforeUpdate() {},
  updated() {},
  methods: {
    jiu(a) {
      this.$emit("inValue", a);
    },
    clear() {
      window.console.log("clear");
    }
  },
  watch: {}
};
</script>
<style>
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