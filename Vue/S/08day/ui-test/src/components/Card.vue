<template>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
  >
    <div slot="tags">
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </div>
    <div slot="footer">
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </div>
  </van-card>
</template>
<script>
import Vue from "vue";
import { Card,Tag,Button } from "vant";

Vue.use(Card).use(Tag).use(Button);
export default {};
//from:https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/card
</script>