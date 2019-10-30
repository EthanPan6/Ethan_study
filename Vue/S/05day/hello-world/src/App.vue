<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Slot1 />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Slot1 from "./components/demo1/Slot1";
export default {
  name: "app",
  components: {
    // HelloWorld,
    Slot1
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
