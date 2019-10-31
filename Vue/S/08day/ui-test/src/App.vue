<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Search />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Search from "./components/Search.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    Search
  }
};
</script>

<style>
</style>
