<template>
  <div>
    <router-link :to="{name:'search'}">
      <Search1 />
    </router-link>

    <Tabs1 />
  </div>
</template>
<script>
import Search1 from "../components/Search1.vue";
import Tabs1 from "../components/Tabs1.vue";
export default {
  components: {
    Search1,
    Tabs1
  }
};

//搜索及首页二级导航
</script>