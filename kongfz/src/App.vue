<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Tabbar /> -->
    <router-view />
    <Result />
  </div>
</template>

<script>
// import Tabbar from "./components/Tabbar";
import Result from "./components/search/pages/Result";
export default {
  name: "app",
  components: {
    // Tabbar
    Result
  }
};
</script>

<style scoped>
</style>
