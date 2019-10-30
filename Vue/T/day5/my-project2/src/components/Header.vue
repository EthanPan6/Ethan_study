<template>
  <header :style="{
    backgroundColor: color
  }">
    <slot />
  </header>
</template>
<script>
export default {
  // props: ['color'],
  props: {
    // 规范传入类型
    color: String
  },
  data() {
    return {
      title: "腾讯新闻"
    };
  },
  methods: {}
};
</script>
<style scoped>
header {
  text-align: center;
  line-height: 50px;
  width: 100%;
  height: 50px;
  background-color: red;
  color: white;
}
</style>