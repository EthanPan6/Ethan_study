<template>
  <div>
    <van-nav-bar
      title="发帖"
      left-text
      right-text="发布"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field v-model="value" placeholder="添加标题" />
    </van-cell-group>

    <van-cell-group class="noborder">
      <van-field
        v-model="message"
        size="large"
        minlength="10"
        type="textarea"
        placeholder="添加内容(至少10个字)"
      />
    </van-cell-group>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Field, CellGroup } from "vant";

Vue.use(NavBar)
  .use(Field)
  .use(CellGroup);
export default {
  data() {
    return {
      value: "",
      message: ""
    };
  },
  methods: {
    onClickLeft() {
      window.console.log("取消");
    },
    onClickRight() {
      window.console.log("发布");
    }
  }
};
//https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/field
</script>
<style >
.noborder {
  border-bottom: none;
}
</style>