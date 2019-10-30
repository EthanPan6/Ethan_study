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
<style lang="scss" scoped>
$size: 50px;
header {
  text-align: center;
  line-height: $size;
  width: 100%;
  height: $size;
  background-color: red;
  color: white;
}
</style>