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
        rows="20"
        type="textarea"
        placeholder="添加内容(至少10个字)"
      />
    </van-cell-group>
    <van-cell title="技术分类" is-link icon="bars" class="dibu" />
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Field, CellGroup, Cell, Dialog } from "vant";

Vue.use(NavBar)
  .use(Field)
  .use(CellGroup)
  .use(Cell)
  .use(Dialog);
export default {
  data() {
    return {
      value: "",
      message: "",
      show: false
    };
  },
  components: {},
  methods: {
    onClickLeft() {
      this.show = true;
      Dialog.confirm({
        title: "退出",
        message: "是否直接退出",
        confirmButtonText: "保存并退出",
        cancelButtonText: "直接退出"
      })
        .then(() => {
          // on confirm
          //axios->mongodb
        })
        .catch(() => {
          // on cancel
          this.$router.push("/main/bbs");
        });
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
.dibu {
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
}
</style>