<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Article />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar.vue";
import Article from "./components/Article";

export default {
  name: "app",
  components: {
    Tabbar,
    Article
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
