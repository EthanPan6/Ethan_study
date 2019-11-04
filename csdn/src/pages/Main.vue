<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "../components/Tabbar.vue";
export default {
  components: {
    Tabbar
  }
};
//下方导航及上方内容
</script>